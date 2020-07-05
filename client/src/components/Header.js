import React from 'react';

//TODO insert an if to return different header when logged in.
//? Might need to make stateful to get username?? Or perhaps to be done with prop

function Header(){
    return(
        <div className="header">
        <div className="bounds">
          <h1 className="header--logo">Courses</h1>
          <nav><a className="signup" href="/signup">Sign Up</a><a className="signin" href="/signin">Sign In</a></nav>
        </div>
      </div>
    )
}

export default Header