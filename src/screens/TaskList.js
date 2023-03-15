import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, FlatList } from 'react-native'

import Task from '../components/Task'
import commonStyles from '../commonStyles'
import moment from 'moment'
import 'moment/locale/pt-br'

import todayImage from '../../assets/imgs/today.jpg'

export default class TaskList extends Component {

    state = {
        tasks: [{
            id: Math.random(),
            desc: 'Comprar Livro Código Limpo',
            estimateAt: new Date(),
            doneAt: new Date(),
        },
        {
            id: Math.random(),
            desc: 'Ler Livro Código Limpo',
            estimateAt: new Date(),
            doneAt: null,
        },]
    }

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
                    <FlatList
                        data={this.state.tasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item}) => <Task {...item} />}
                    />
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
