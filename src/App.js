import React, { Fragment, Component } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import styles from './styles'
import Device from './utils/Device'
import data from './data/data.json'
import UserList from './components/UserList'

class App extends Component{

  renderMaster() {
    return (
      <UserList contacts={data.results} />
    )    
  }

  renderDetail() {
    if(Device.isPhone()){
      console.log('renderDetail')
      return (<Text>Render on tablets only!!</Text>)      
    }
  }

  render(){
    return (
      <Fragment>
        <SafeAreaView style={styles.content}>
          <View>
            {this.renderMaster()}
            {/* {this.renderDetail()} */}
          </View>            
        </SafeAreaView>
      </Fragment>
    );
  }  
}

export default App;
