import React,{ Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from
'react-native'

class TodoApp extends Component {
constructor(props) {
super(props);
this.state = {
todos: [
// { name: "task1" ,isCompleted: false}
],
input: "",
}
}
setInput = (e)=>{
this.setState({input:e})
}
addTask = (e)=>{
const todoItem = { name: this.state.input, isCompleted: false }
const joined = this.state.todos.concat(todoItem)
this.setState({todos: joined, input: ""})
}
taskCompleted = (e) => {
const items = [...this.state.todos];
const item = items.find(item => item.name === e)
item.isCompleted = true
this.setState({todos: items})
}
taskNotCompleted = (e) => {
const items = [...this.state.todos];
const item = this.state.todos.find(item => item.name === e)
item.isCompleted = false
this.setState({todos: items})
}
doneTask(index){
const items = [...this.state.todos];
items.splice(index,1)
this.setState({todos: items})
}
render () {
const styles = StyleSheet.create({
container: {
flex: 1,
flexDirection:"row",
marginBottom: 40
}
})
return(
<View>
<Text>Todo List</Text>
{
this.state.todos.map((item,index) => {
return(
<View key={index}>
<Text>{ item.name }</Text>
<View>
<Button title="Done" onPress={()=>this.doneTask(index)} />
</View>
</View>
)
})
}
<Text>Add Task:</Text>
<TextInput placeholder="type here"
onChangeText={this.setInput} value={this.state.input} />
<Button onPress={this.addTask} title="Add" />
</View>
);
}
}

export default TodoApp;