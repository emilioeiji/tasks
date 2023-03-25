import React from 'react'
import { Text, View, ScrollView, StyleSheet, Platform } from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer'

import TaskList from '../screens/TaskList'
import commonStyles from '../commonStyles'

const menuConfig = {
    drawerLabelStyle: {
        fontFamily: commonStyles.fontFamily,
        fontWeight: 'normal',
        fontSize: 20
    },
    drawerActiveTintColor: '#080'
}

const Drawer = createDrawerNavigator()

function CustomDrawerContent(props) {
    const email = props.email
    return (
        <DrawerContentScrollView {...props}>
            <ScrollView>
                <View style={styles.header}>
                    <Gravatar 
                        style={styles.avatar}
                        options={{ 
                            email: email,
                            secure: true
                        }}
                    />
                </View>
                <DrawerItem label="Teste" onPress={() => alert('Teste')} />
                <DrawerItemList {...props} />
            </ScrollView>
        </DrawerContentScrollView>
    );
  }

export default props => {
    const email = props.route.params.email
    return (
      <Drawer.Navigator
        screenOptions={menuConfig}
        drawerContent={(props) => <CustomDrawerContent {...props} email={email} />}
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
    )
}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    avatar: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderRadius: 30,
        margin: 10,
        marginTop: Platform.OS === 'ios' ? 30 : 10
    }
})