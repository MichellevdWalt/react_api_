import React from 'react';

export default ({ context  }) => {
  const authUser = context.authenticatedUser;
  console.log(authUser);
  return (
  <div className="bounds">
    <div className="grid-100">
      <h1>{authUser[0].firstName} is authenticated!</h1>
      <p>Your username is {authUser[0].emailAddress}.</p>
    </div>
  </div>
  );
}