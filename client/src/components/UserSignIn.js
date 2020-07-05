import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';

class UserSignIn extends Component{
    state = {
        emailAddress: '',
        password: '',
        errors: [],
      }

 render(){
    const {
        emailAddress,
        password,
        errors,
      } = this.state;
     return(
        <div>
            <Header />
            <div className="bounds">
            <div className="grid-33 centered signin">
            <h1>Sign In</h1>
            <div>
            <Form
              errors={errors}
              submitButtonText="Sign In"
              cancel = {this.cancel}
              submit = {this.submit}
              elements= {()=>(
              <React.Fragment>
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
                </React.Fragment>
               )}>
            </Form>
            </div>
            <p>&nbsp;</p>
            <p>Don't have a user account? <a href="/signup">Click here</a> to sign up!</p>
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

  submit = () => {
    const { context } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/authenticated' } };
    const { emailAddress, password } = this.state;

    context.actions.signIn(emailAddress, password)
      .then((user) => {
        if (user === null) {
          this.setState(() => {
            return { errors: [ 'Sign-in was unsuccessful' ] };
          });
        } else {
          this.props.history.push(from);
        }
      })
      .catch((error) => {
        console.error(error);
        this.props.history.push('/error');
      });
  }

  cancel = () => {
    this.props.history.push('/');
  }
}

export default UserSignIn