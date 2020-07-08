import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//TODO insert an if to return different header when logged in.
//? Might need to make stateful to get username?? Or perhaps to be done with prop

class Header extends Component{
 
render(){
  const {context} = this.props;
  const authUser = context.authenticatedUser;
    return(
        <div className="header">
        <div className="bounds">
          <h1 className="header--logo">Courses</h1>
          <nav>
            {authUser ? (
              <React.Fragment>
                <span>Welcome, {authUser[0].firstName}!</span>
                <Link to="/signout">Sign Out</Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link className="signup" to="/signup">Sign Up</Link>
                <Link className="signin" to="/signin">Sign In</Link>
              </React.Fragment>
            )}
          </nav>
        </div>
      </div>
    )
}
}

export default Header