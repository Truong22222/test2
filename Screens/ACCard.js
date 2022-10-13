import React from 'react';
import {StyleSheet} from 'react-native';
import {View,Text} from 'native-base';


const ACCard = (props) => {
    const { name, price, address,phone,day,products, countInStock } = props;

    return (
        <View style={styles.container}>
            
            {/* <View style={styles.card}/> */}
            <Text style={styles.title}>
                {name.length > 30 ? name.substring(0, 15 - 3)
                    + '...' : name
                }
            </Text>
            <Text></Text>
            <Text style={styles.address}>Địa chỉ: {address}</Text>
            <Text style={styles.phone}>SĐT: {phone}</Text>
            <Text style={styles.day}>Ngày làm việc: {day}</Text>
            <Text style={styles.products}>Khối lượng công việc: {products} </Text>
            <Text style={styles.price}>Giá: {price}VND</Text>
            
        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
        width: 355,
        height: 400,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white'
    },
   
    // card: {
    //     marginBottom: 10,
    //     height: width  - 20,
    //     backgroundColor: 'transparent',
    //     width: width - 20 - 10
    // },
    title: {
        fontWeight: "bold",
        fontSize: 17,
        textAlign: 'center',
        paddingTop:20,

    },
    price: {
        fontSize: 23,
        color: 'red', 
        fontWeight: "bold",
        paddingTop:20,

    },
    phone:{
        fontSize: 15,
        textAlign: 'center', 
        padding: 20,     
    },
    address:{
        fontSize: 15,
        textAlign: 'center',
        padding: 20,                           
    },
    day:{
        fontSize: 15,
        textAlign: 'center', 
        padding: 20,     

    },
    products:{
        fontSize: 15,
        textAlign: 'center',
        padding: 20,     
    },
})

export default ACCard;