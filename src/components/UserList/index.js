import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'
import Contact from '../Contact'

class UserList extends React.Component{

    state = {
        contacts: this.props.contacts
    }

    render(){
        const contact = this.state.contacts
        return(
            <View style={styles.main}>
                <Text style={styles.toolbar}>My contacts</Text>
                <FlatList
                    style={styles.main} 
                    data={contact}
                    renderItem={( {item} ) => <Contact person={item} />}
                    keyExtractor={ item => item.id.value } />
            </View>
        )
    }
}

export default UserList