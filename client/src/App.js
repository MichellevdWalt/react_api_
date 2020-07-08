import React from 'react';
import './global.css';
import {
  BrowserRouter as Router, 
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
import Header from './components/Header';
import PrivateRoute from './PrivateRoute';
import Authenticated from './components/Authenticated';

const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const CoursesWithContext = withContext(Courses);
const HeaderWithContext = withContext(Header);
const ErrorWithContext = withContext(Error);
const CourseDetailWithContext = withContext(CourseDetail);
const AuthWithContext = withContext(Authenticated);
const SignOUtWithContext = withContext(UserSignOut);

function App() {
  return (
    <div>
      <Router>
       <div>
         <HeaderWithContext />
       
        <Switch>
          <Route exact path="/" component={CoursesWithContext}/>
          <Route path="/courses/:id" component={CourseDetailWithContext}/>
          <PrivateRoute path="/authenticated" component={AuthWithContext}/>
          <Route exact path="/course/create" render={()=> <CreateCourse />}></Route>
          <Route path= "/course/:id/update" render={({match})=> <UpdateCourse id={match.params.id}/>}></Route>
          <Route path= "/signin" component={UserSignInWithContext} />
          <Route path= "/signup" component={UserSignUpWithContext} />
          <Route exact path= "/signout" component={SignOUtWithContext} />
          <Route component={ErrorWithContext}/>
        </Switch>
        </div>
      </Router>  
    </div>
  );
}

export default App;
