import React, { Component, createContext,useState } from 'react';
import  { Redirect } from 'react-router-dom'
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  
  state = {
    authtoken : "0",
    isauth:false ,
  }

newuser = (settoken) => {
  this.setState({authtoken : settoken , isauth : !this.state.isauth})
  return(
    <Redirect to='http://localhost:3000/' / >
  )
}
  
  render() { 
    return (
      <ThemeContext.Provider value={{...this.state, authuser : this.newuser}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
 
export default ThemeContextProvider;