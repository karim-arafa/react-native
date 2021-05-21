import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";
import AddInput from "./AddInput";
import TodoList from "./TodoList";
import Header from "./Header";
import Empty from "./Empty";
import * as Font from "expo-font";
import Register from './Register';
import TodoApp from './TodoApp';
import ImagePickerExample from './ImagePickerExample';
import Toto from './Toto';

const Home = () => <Toto />;

const About = () => <Register />;

const Topic = () => <ImagePickerExample />;


const App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Todo App</Text>
        </Link>
        <Link
          to="/about"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>Register</Text>
        </Link>
        <Link
          to="/topic"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>Profile</Text>
        </Link>
      </View>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topic" component={Topic} />
    </View>
  </NativeRouter>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default App;