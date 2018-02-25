import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBBKHqS_0wF7ItrZ1n1s5HOQyT2Lp1ODk4',
            authDomain: 'rn-auth-e8049.firebaseapp.com',
            databaseURL: 'https://rn-auth-e8049.firebaseio.com',
            projectId: 'rn-auth-e8049',
            storageBucket: 'rn-auth-e8049.appspot.com',
            messagingSenderId: '436230821492'
        };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <View>
                <Header title="Authentication" />

                <LoginForm />
            </View>
        );
    }
}

export default App;
