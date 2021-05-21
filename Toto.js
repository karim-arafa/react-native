import React , { useState } from "react";
import { StyleSheet, Text, View, AppRegistry, StatusBar, FlatList  } from "react-native";
import styled from "styled-components";
import AddInput from "./AddInput";
import TodoList from "./TodoList";
import Header from "./Header";
import Empty from "./Empty";


export default function Toto() {
    const [data, setData] = useState([]);
    const submitHandler = (value) => {
     setData((prevTodo) => {
       return [
         {
           value: value,
           key: Math.random().toString(),
         },
         ...prevTodo,
       ];
     });
   };
   const deleteItem = (key) => {
     setData((prevTodo) => {
       return prevTodo.filter((todo) => todo.key != key);
     });
   };
   const ComponentContainer = styled.View`
     background-color: cadetblue ;
     height: 100%;
     flex-direction: column;
     align-items: center;
     justify-content: center;
   `;
   
    return (
         
          
         <ComponentContainer>
           <View>
             <StatusBar barStyle="light-content" 
                backgroundColor="midnightblue" />
           </View>
   
           <View>
           <FlatList
               data={data}
               ListHeaderComponent={() => <Header />}
               ListEmptyComponent={() => <Empty />}
               keyExtractor={(item) => item.key}
               renderItem={({ item }) => (
                 <TodoList item={item} deleteItem={deleteItem} />
               )}
             />
           <View>
               <AddInput submitHandler={submitHandler} />
               
             </View>
   
           </View>
         </ComponentContainer>
       );
   }
   
   