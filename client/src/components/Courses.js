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
            <span>
               <a className="button create-course" 
                  href={'/course/create'}>
                   Create a Course
                </a>
                <p> </p>
            </span>
             
         )
     }
 }

 render(){
     return(
          <div>
            {this.checkAuth()}
          <div>
             <ul>
              {this.formatCourses()}
             </ul>
         </div>

         </div>
     )
 }

}

export default Courses