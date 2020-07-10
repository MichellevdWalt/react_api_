import React, { Component } from 'react';

class Authenticated extends Component {
  state ={
    authUser: this.props.context.authenticatedUser
  }
  
  redirect(){
   console.log(this.props)
  }

  componentDidMount(){
    setTimeout(this.redirect, 7000)
  }
  render(){
    const {
      authUser
    } = this.state
    
  return (
  <div className="bounds">
    <div className="grid-100">
     
      <h1>{authUser[0].firstName} is authenticated!</h1>
      <p>Your username is {authUser[0].emailAddress}.</p>
      <p>This page will auto-redirect</p>
    </div>
  </div>
  );
}
}

export default Authenticated