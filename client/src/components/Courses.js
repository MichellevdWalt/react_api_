import React, {Component} from 'react';
import axios from 'axios';
import Header from './Header';

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
                    <a className="course--module course--link" href={"/courseDetail/" + course.id}>
                    <h4 className="course--label">Course</h4>
                    <h3 className="course--title">{course.title}</h3>
                    </a>
                </div>
            )
         
     })
     return coursesFormat
 }
 
 render(){
     return(
         <div>
         <Header />
         <div>
             <ul>
              {console.log(this.state)}
              {this.formatCourses()}
             </ul>
         </div>
         </div>
     )
 }

}

export default Courses