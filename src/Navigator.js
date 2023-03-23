import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Auth from './screens/Auth'
import TaskList from './screens/TaskList'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

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
                component={TaskList}
            >

            </Stack.Screen>

        </Stack.Navigator>
        </NavigationContainer>
    )
}