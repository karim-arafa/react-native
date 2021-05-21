import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from
'react-native'
class Register extends Component {
    state = {
        email: '',
        password: ''
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    login = async (email, pass) => {
        const user = {
            email: this.state.email,
            password: this.state.password,
        };

        let res = await fetch("https://reqres.in/api/register",
        {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(user),
        });

        let resJson = await res.json();

        if(resJson.token){
            alert("Register success" )
        } else {
            alert('email: ' + email + ' password: ' + pass)
        }

    }
    render() {
        return (
            <View style = {styles.container}> 
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Email"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handleEmail}/>
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Password"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handlePassword}/>
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                    () => this.login(this.state.email,
                    this.state.password)
                    }>
                    <Text style = {styles.submitButtonText}> Register </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Register
const styles = StyleSheet.create({
    container: {
    paddingTop: 23
    },
    input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth:5,
    padding:10
    },
    submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
    },
    submitButtonText:{
    color: 'white'
    },
})