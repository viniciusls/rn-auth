import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ label, onChangeText, value }) => {
    const { inputStyle } = styles;

    return (
        <View>
            <Text>{label}</Text>

            <TextInput
                value={value}
                onChangeText={onChangeText}
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
