import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

class ImagePickerExample extends React.Component {
constructor() {
super();
this.state = {
image: null,
text: null,
}
}

 componentDidMount() {
console.log(Platform.OS);
(async () => {
if (Platform.OS !== 'web') {
const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
if (status !== 'granted') {
alert('Sorry, we need camera roll permissions to make this work!');
}
}
})
}

 pickImage = async () => {
let result = await ImagePicker.launchImageLibraryAsync({
mediaTypes: ImagePicker.MediaTypeOptions.All,
allowsEditing: true,
aspect: [4, 3],
quality: 1,
});

 console.log(result);

 if (!result.cancelled) {
this.setState({ image: result.uri });
}
}

 render() {
return (
   
 <View >
{this.state.text ? <Text></Text> : <View>
<TextInput style={styles.input} onChangeText={text => {
this.state.text = text
console.log(this.state.text);
}} />
<TouchableOpacity style={styles.button} onPress={() => {
this.setState({ text: this.state.text })
}} >
<Text>Add Username</Text>
</TouchableOpacity>
</View>
}
<Text>
{this.state.text ? `Username: ${this.state.text}` : ""}
</Text>
 {this.state.image ? null : <Button title="Pick an image from camera roll" onPress={this.pickImage} />}

{this.state.image && <Image source={{ uri: this.state.image }} style={{ width: 100, height: 100 }} />}
</View> 

)
}
}
const styles = StyleSheet.create({
input: {
height: 40,
margin: 12,
borderWidth: 1,
width: 200
},
});
export default ImagePickerExample