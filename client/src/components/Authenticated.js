import React, { Component } from 'react';

class Authenticated extends Component {
  state ={
    authUser: this.props.context.authenticatedUser
  }
  

  componentDidMount(){
    setTimeout(()=>{this.props.history.push('/')}, 7000)
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
      <p>This page will auto-redirect in 7 seconds</p>
      <p>If it doesn't, just click <a href='/'>here</a></p>
    </div>
  </div>
  );
}
}

export default Authenticated