import React, { Component } from 'react';
import Form from './Form';

export default class UserSignUp extends Component{
    state ={
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        confirmPassword: '',
        errors: [],
    }

   
render(){
    const {
        firstName,
        lastName,
        emailAddress,
        password,
        confirmPassword,
        errors,
      } = this.state;
    return(
        
        <div>
            <div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign Up</h1>
          <div>
          <Form
              errors={errors}
              submitButtonText="Sign Up"
              cancel = {this.cancel}
              submit = {this.submit}
              elements= {()=>(
              <React.Fragment>
              <div>
                <input 
                    
                    id="firstName" 
                    name="firstName" 
                    type="text" 
                    className="" 
                    placeholder="First Name" 
                    value={firstName}
                    onChange={this.change}
                >
                </input>
              </div>
              <div>
                <input 
                    id="lastName" 
                    name="lastName" 
                    type="text" 
                    className="" 
                    placeholder="Last Name" 
                    value={lastName}
                    onChange={this.change}
                >
                </input>
              </div>
              <div>
                <input 
                    id="emailAddress" 
                    name="emailAddress" 
                    type="text" 
                    className="" 
                    placeholder="Email Address" 
                    value={emailAddress}
                    onChange={this.change}
                >
                </input>
              </div>
              <div>
                <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    className="" 
                    placeholder="Password" 
                    value={password}
                    onChange={this.change}
                >
                </input>
              </div>
              <div>
                <input 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    type="password" 
                    className="" 
                    placeholder = "Confirm Password"
                    value={confirmPassword}
                    onChange={this.change}
                >
                </input>
              </div>
                </React.Fragment>
              )}>
            </Form>
          </div>
          <p>&nbsp;</p>
          <p>Already have a user account? <a href="/signin">Click here</a> to sign in!</p>
        </div>
      </div>

        </div>
    )
}
change = (event) => {
  const name = event.target.name;
  const value = event.target.value;

  this.setState(() => {
    return {
      [name]: value
    };
  });
}

submit = ()=>{
  const { context } = this.props;
  const {
    firstName,
    lastName,
    emailAddress,
    password,
    confirmPassword,
  } = this.state;

  // Create user
  const user = {
    firstName,
    lastName,
    emailAddress,
    password
  };

  context.data.createUser(user)
    .then( errors => {
      if (errors.length !== 0) {
        if(password !== confirmPassword){
          console.log(errors);
          errors.Error += ",↵Validation error: Your passwords don't match please try again"
          this.setState({ errors });
        }else{
          this.setState({ errors });
        }
      } else {
        context.actions.signIn(emailAddress, password)
          .then(() => {
            this.props.history.push('/authenticated');    
          });
      }
    })
    .catch((err) => {
      console.log(err);
      this.props.history.push('/error');
    });

}
cancel = () => {
  this.props.history.push('/');
}
}
