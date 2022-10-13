import React from 'react';
import { Button ,VStack,Text, View} from 'native-base';
import { StyleSheet } from 'react-native';
import Colors from '../color';

const ProductList = ()=> {
        return(
            <View bg={Colors.main}>
                    <VStack space={10} alignItems="center">
                        <Text style={styles.text1}>
                    Vui lòng chọn chính xác kích thước phòng cần dọn dẹp !
                        </Text>
                    <Button style={styles.button1}
                    onPress={() =>{console.log("Clicked !!!")}}> 
                        <Text style={styles.text2}>Phòng tối đa 30m2</Text>
                    </Button>
                    <Button style={styles.button1}
                    onPress={() =>{console.log("Clicked 1!!!")}}>          
                        <Text style={styles.text2}>Phòng tối đa 40m2</Text>
                    </Button>
                    <Button style={styles.button1}
                    onPress={() =>{console.log("Clicked 2!!!")}}>
                        <Text style={styles.text2}>Phòng tối đa 50m2</Text>
                    </Button>
                    <Text style={styles.title}> Tổng quan dịch vụ </Text>
                    <View style={styles.service} >
                    <Text>- Quét bụi, quét mạng nhện trên trần nhà </Text>
                    <Text>- Phủi bụi, lau chùi bề mặt bàn ghế , tủ kệ, các vật dụng, đồ trang trí  </Text>
                    <Text>- Quét bụi, lau sàn thu gom và đổ rác...  </Text>
                    <Text>- Vệ sinh rèm cửa, cửa ra vào và cửa sổ </Text>
                    </View>
                    <Text style={styles.italic}>Created by SOUJI</Text>
                  

                </VStack>
            </View>
        )
              
}
export default ProductList 
const styles = StyleSheet.create({
    
    button1 : {
        borderRadius :10,
        width :300,
        height :100,
        backgroundColor: Colors.white,   
        shadowColor: "black",
    },
    text1:{
        fontSize : 18,
        paddingTop :50,
        paddingBottom :30,
        fontWeight: 'bold',    
        paddingLeft:6 ,
        color:Colors.white  
    },
    text2: {
        fontSize : 16,
        fontWeight:'bold',
        color: Colors.black,
      
    },
    title :{
        fontWeight: 'bold',
        fontSize :16,

    },
    service:{
        marginTop:-20,
    },

    italic :{fontStyle : 'italic' ,fontSize :12, }
})
