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
import UnhandledError from './components/UnhandledError';
import withContext from './Context';
import Header from './components/Header';
import PrivateRoute from './PrivateRoute';
import Authenticated from './components/Authenticated';
import Forbidden from './components/Forbidden';
import NotFound from './components/NotFound';
import Delete from './components/Delete';

const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const CoursesWithContext = withContext(Courses);
const HeaderWithContext = withContext(Header);
const ErrorWithContext = withContext(UnhandledError);
const CourseDetailWithContext = withContext(CourseDetail);
const AuthWithContext = withContext(Authenticated);
const SignOUtWithContext = withContext(UserSignOut);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);
const ForbiddenWithContext = withContext(Forbidden);
const NotFoundWithContext = withContext(NotFound);
const DeleteWithContext = withContext(Delete);

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
          <PrivateRoute exact path="/course/create" component={CreateCourseWithContext}/>
          <PrivateRoute path= "/course/:id/update" component={UpdateCourseWithContext}/>
          <PrivateRoute path= "/course/:id/delete" component={DeleteWithContext} />
          <Route path= "/signin" component={UserSignInWithContext} />
          <Route path= "/signup" component={UserSignUpWithContext} />
          <Route exact path = "/forbidden" component={ForbiddenWithContext} />
          <Route exact path = "/error" component={ErrorWithContext} />
          <Route exact path= "/signout" component={SignOUtWithContext} />
          <Route component={NotFoundWithContext}/>
        </Switch>
        </div>
      </Router>  
    </div>
  );
}

export default App;
