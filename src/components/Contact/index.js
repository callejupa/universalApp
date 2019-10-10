import React from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import styles from './styles';

class Contact extends React.Component{

    capitalize = (value) => {
        return value[0].toUpperCase() + value.substring(1)
    }

    render(){

        const srcimg = this.props.person.picture.large
        const firstname = this.props.person.name.first
        const secondname = this.props.person.name.last
        const phone = this.props.person.phone
        
        return (
            <TouchableOpacity style={styles.row}>
                <Image 
                    source={{uri: `${srcimg}`}}
                    style={styles.img} />
                <View style={styles.info}>
                    <Text style={styles.name}>
                        {`${this.capitalize(firstname) +` `+this.capitalize(secondname)}`} 
                        
                    </Text>
                    <Text style={styles.phone}>{phone}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default Contact