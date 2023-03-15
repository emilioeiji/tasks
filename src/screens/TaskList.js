import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

import commonStyles from '../commonStyles'
import moment from 'moment'
import 'moment/locale/pt-br'

import todayImage from '../../assets/imgs/today.jpg'

export default class TaskList extends Component {

    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
            <View style={style.container}>
                <ImageBackground style={style.background} source={todayImage}>
                    <View style={style.titleBar}>
                        <Text style={style.title}>
                            Hoje
                        </Text>
                        <Text style={style.subTitle}>
                            {today}
                        </Text>
                    </View>
                </ImageBackground>
                <View style={style.taskList}>
                    <Text>Tarefa #01</Text>
                    <Text>Tarefa #02</Text>
                    <Text>Tarefa #03</Text>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20,
    },
    subTitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    }
})