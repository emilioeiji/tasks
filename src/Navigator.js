import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import MenuDrawer from './screens/Menu'
import Auth from './screens/Auth'
import AuthOrApp from './screens/AuthOrApp'

const Stack = createNativeStackNavigator()

export default props => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName='AuthOrApp'
            screenOptions={{ headerShown: false}}
        >
            <Stack.Screen 
                name='AuthOrApp'
                options={{ title: 'Loading'}}
                component={AuthOrApp}
            />
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