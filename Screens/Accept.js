import React,{useEffect, useState} from "react";
import {VStack,FlatList,View,Text,Button} from 'native-base';
import {StyleSheet } from "react-native";
import ACList from "./ACList";
import Colors from '../color';


const data = require('../assets/data/products.json');

const Accept =  () =>{
    const [products,setProduct]= useState([]);
    useEffect(() => {
        setProduct(data)
        return()=> {
                setProduct([])
        }
    },[])
     return (
            <View bg={Colors.main} >
                <VStack space={2} >
                        <Text style={styles.text}> Thông tin chi tiết công việc  </Text>
                            <View>
                            <FlatList   
                                showsHorizontalScrollIndicator={true}           
                                data={products}
                                numColumns={1}
                                numRows={3}
                                renderItem={({item}) => 
                                <ACList 
                                key={item.brand}
                                item={item}/>}
                                keyExtractor={item => item.brand}
                            />
                            </View>
                              <Button style={styles.button1}
                                onPress={() =>{console.log("Clicked !!!")}}> 
                                <Text style={styles.text2}>Thanh toán</Text>
                              </Button>
                          <Text style={styles.italic}>Created by SOUJI</Text>            
                </VStack>
            </View>
     )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: Colors.main,
    //   marginTop:25,
    },
    text:{
      fontSize :20,
      marginLeft:15,
      paddingTop:70,
      lineHeight:30,
      fontWeight : "bold",
    },
    italic :{fontStyle : 'italic' ,fontSize :12,paddingLeft:130},
    text2: {
      fontSize : 16,
      fontWeight:'bold',
      color: Colors.black,
      
      
    
  },  button1 : {
    borderRadius :10,
    width :200,
    height :60,
    backgroundColor: Colors.subGreen,   
    shadowColor: "black",
    marginLeft:90,
    alignItems: "center",
    marginTop: -100,
    marginBottom:90,
},

  });
export default Accept;