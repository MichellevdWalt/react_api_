import React from 'react';
import './global.css';
import {
  BrowserRouter, 
  Route,
  Switch,
  } from 'react-router-dom';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';
import Error from './components/Error';
import withContext from './Context';

const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render= {()=> <Courses />}></Route>
          <Route path="/courses/:id" render={({match})=> <CourseDetail id={match.params.id}/>}></Route>
          <Route exact path="/course/create" render={()=> <CreateCourse />}></Route>
          <Route path= "/course/:id/update" render={({match})=> <UpdateCourse id={match.params.id}/>}></Route>
          <Route path= "/signin" component={UserSignInWithContext} />
          <Route path= "/signup" component={UserSignUpWithContext} />
          <Route exact path= "/signout" render= {()=> <UserSignOut />}></Route>
          <Route render={()=> <Error />}></Route>
        </Switch>
      </BrowserRouter>  
    </div>
  );
}

export default App;
