import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ label }) => {
    const { inputStyle } = styles;

    return (
        <View>
            <Text>{label}</Text>

            <TextInput
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
                style={inputStyle}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        height: 40,
        width: 100
    }
};

export { Input };
