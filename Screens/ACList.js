import React from 'react';
import { TouchableOpacity, View} from 'react-native';
import ACCard from './ACCard';



const ProductList = (props) => {
  const {item} = props;
    return(    
        <TouchableOpacity  style={{ width: 400} }>
            <View style={{ width: 300, height:600
                }}
        >
           <ACCard {...item} />
            </View>
        </TouchableOpacity>
    )
}
export default ProductList;


