import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios'
    ? 'http://localhost:8000' : 'http://10.0.2.2:8000'

function showError(err) {
    Alert.alert('Ops! Ocorreu um problema!', `Mensagem: ${err}`)
}

function showSuccess(msg) {
    Alert.alert('Sucesso!', msg)
}

export { server, showError, showSuccess }