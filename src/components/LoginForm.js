import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { text: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input label="Email" />
                </CardSection>

                <CardSection />
                
                <CardSection>
                    <Button>Log in</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
