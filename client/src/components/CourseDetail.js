import React, { Component } from 'react';
import axios from 'axios';

//TODO create paragraphs for longer descriptions (Optional)
//TODO Delete function (Perhaps a component and page to confirm first??)


class CourseDetail extends Component{
    state = {
        course: [],
        loaded: false
    }

//Get course from API
async getCourse(){
    const {match} = this.props
    axios.get("http://localhost:5000/api/courses/" + match.params.id )
    .then(response => this.setState({
        course: response.data[0],
        loaded: true
    }))
}

//Get course from API when component mounts
componentDidMount(){
 this.getCourse()
}

//Format data from api into an array and then create list items for all in the array to be published
formatMaterials(){
    let formattedmaterials
    if(this.state.course.materialsNeeded !== null){
   let n = 0;
   let materials = this.state.course.materialsNeeded;
   let materialsSplit = materials.split("*");
   let materialsArray = [materialsSplit];
   formattedmaterials = materialsArray[0].map(material => {
       if(material !== ""){
        n+=1
       return(
           <li key ={n}>{material}</li>
       )
       } else{
        formattedmaterials = <li>No materials Needed</li>
        return(formattedmaterials)
        }})
   return formattedmaterials;
}}

//Function to create full name of course owner to publish
createName(){
    let firstName = this.state.course.User.firstName;
    let lastName = this.state.course.User.lastName;
    let fullName = firstName + " " + lastName;
    return fullName
}


render(){
    if(this.state.loaded){
    return(
        <div>
        <div>
        <div className="actions--bar">
          <div className="bounds">
            <div className="grid-100"><span><a className="button" href={'/course/' + this.state.course.id + '/update'}>Update Course</a><a className="button" href="#">Delete Course</a></span><a 
              className="button button-secondary" href="/">Return to List</a></div>
          </div>
        </div>
        <div className="bounds course--detail">
          <div className="grid-66">
            <div className="course--header">
              <h4 className="course--label">Course</h4>
              <h3 className="course--title">{this.state.course.title}</h3>
              <p>By {this.createName()}</p>
            </div>
            <div className="course--description">
              <p>{this.state.course.description}</p>
            </div>
          </div>
          <div className="grid-25 grid-right">
            <div className="course--stats">
              <ul className="course--stats--list">
                <li className="course--stats--list--item">
                  <h4>Estimated Time</h4>
                  <h3>{this.state.course.estimatedTime}</h3>
                </li>
                <li className="course--stats--list--item">
                  <h4>Materials Needed</h4>
                  <ul>
                    {this.formatMaterials()}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
    } else {
        return(
            <div>
                <p>Loading...</p>
            </div>
        )
    }
}
}
export default CourseDetail