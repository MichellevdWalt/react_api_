import React, {Component} from 'react';
import axios from 'axios';

class Courses extends Component {
    state = {
        courses: []
    }
 getCourses = () => {
   axios.get('http://localhost:5000/api/courses')
   .then(response => this.setState( {courses: response.data}))
 }
 
 componentDidMount(){
    this.getCourses()
}

 formatCourses = () => {
     let courses = this.state.courses
     let coursesFormat = courses.map(course => {
            return(
                <div key={course.id}  className="grid-33">
                    <a className="course--module course--link" href={"/courses/" + course.id}>
                    <h4 className="course--label">Course</h4>
                    <h3 className="course--title">{course.title}</h3>
                    </a>
                </div>
            )
         
     })
     return coursesFormat
 }
 
 checkAuth(){
     const authUser = this.props.context.authenticatedUser
     if(authUser){
         return(
            <div className="grid-33"><a className="course--module course--add--module" href="/course/create">
                <h3 className="course--add--title">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 13 13" className="add">
                    <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                    </svg>
                New Course
                </h3>
          </a></div>
             
         )
     }
 }

 render(){
     return(
          <div>
            <div>
             <ul>
              {this.formatCourses()}
             </ul>
            </div>
         {this.checkAuth()}
         </div>
     )
 }

}

export default Courses