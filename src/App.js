import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Button, CardSection, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

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

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <CardSection>
                        <Spinner size="large" />
                    </CardSection>
                );
        }
    }

    render() {
        return (
            <View>
                <Header title="Authentication" />

                {this.renderContent()}
            </View>
        );
    }
}

export default App;
