import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ label }) => {
    return (
        <View>
            <Text>{label}</Text>
            
            <TextInput
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
                style={{ height: 40, width: 100 }}
            />
        </View>
    );
};

export { Input };
