import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigator from './shared/AppNavigation'


class App extends React.Component{
  render(){
    return(
      <Navigator />
    );
  }

}

export default App