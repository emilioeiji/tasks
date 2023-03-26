import React from 'react'
import { 
    Text, 
    View, 
    ScrollView, 
    StyleSheet, 
    Platform, 
    TouchableOpacity 
} from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer'

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'

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
    const username = props.username
    const email = props.email

    const logout = () => {
        delete axios.defaults.headers.common['Authorization']
        AsyncStorage.removeItem('userData')
        props.navigation.navigate('AuthOrApp')
    }

    return (
        <DrawerContentScrollView {...props}>
            <ScrollView>
                <Text style={styles.title}>
                    Tasks
                </Text>
                <View style={styles.header}>
                    <Gravatar 
                        style={styles.avatar}
                        options={{ 
                            email: email,
                            secure: true
                        }}
                    />
                    <View style={styles.userInfo}>
                        <Text style={styles.name}>{username}</Text>
                        <Text style={styles.email}>{email}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={logout}
                    >
                        <View style={styles.logoutIcon}>
                            <Icon 
                                name='sign-out'
                                size={30}
                                color='#800'
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <DrawerItemList {...props} />
                {/* <DrawerItem
                    labelStyle={styles.drawerItem}
                    label="LogOut" 
                    onPress={() => alert('Teste')} 
                /> */}
            </ScrollView>
        </DrawerContentScrollView>
    );
  }

export default props => {
    const email = props.route.params.email
    const username = props.route.params.username
    return (
      <Drawer.Navigator
        screenOptions={menuConfig}
        drawerContent={(props) => <CustomDrawerContent {...props} email={email} username={username} />}
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
    title: {
        color: '#000',
        fontFamily: commonStyles.fontFamily,
        fontSize: 30,
        paddingTop: Platform.OS === 'ios' ? 45 : 5,
        padding: 10,
    },
    avatar: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderRadius: 30,
        margin: 10,
    },
    userInfo: {
        marginLeft: 10,
    },
    name: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        marginBottom: 5,
        color: commonStyles.colors.mainText
    },
    email: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 15,
        color: commonStyles.colors.subText,
        marginBottom: 10,
    },
    logoutIcon: {
        marginLeft: 10,
        marginBottom: 10,
    },
    drawerItem: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20
    }
})