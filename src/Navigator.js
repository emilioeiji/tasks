import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer'

import Auth from './screens/Auth'
import TaskList from './screens/TaskList'
import commonStyles from './commonStyles'


const menuConfig = {
    drawerLabelStyle: {
        fontFamily: commonStyles.fontFamily,
        fontWeight: 'normal',
        fontSize: 20
    },
    drawerActiveTintColor: '#080'
}

const Drawer = createDrawerNavigator()

function MenuDrawer() {
    return (
      <Drawer.Navigator
        screenOptions={menuConfig}
      >
        <Drawer.Screen 
            name="Today"
            component={TaskList} 
            options={{ headerShown: false, title: 'Hoje' }}
            initialParams={{ title: 'Hoje', daysAhead: 0 }}
        />
        <Drawer.Screen 
            name="Tomorrow"
            component={TaskList} 
            options={{ headerShown: false, title: 'Amanhã' }}
            initialParams={{ title: 'Amanhã', daysAhead: 1 }}
        />
        <Drawer.Screen 
            name="Week"
            component={TaskList} 
            options={{ headerShown: false, title: 'Semana' }}
            initialParams={{ title: 'Semana', daysAhead: 7 }}
        />
        <Drawer.Screen 
            name="Month"
            component={TaskList} 
            options={{ headerShown: false, title: 'Mês' }}
            initialParams={{ title: 'Mês', daysAhead: 30 }}
        />
      </Drawer.Navigator>
    );
  }

const Stack = createNativeStackNavigator()

export default () => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName='Auth'
            screenOptions={{ headerShown: false}}
        >
            <Stack.Screen
                name='Auth'
                options={{ title: 'Autenticação'}}
                component={Auth}
            >

            </Stack.Screen>
            <Stack.Screen
                name='TaskList'
                options={{ title: 'Lista de tarefas'}}
                component={MenuDrawer}
            >

            </Stack.Screen>

        </Stack.Navigator>
        </NavigationContainer>
    )
}