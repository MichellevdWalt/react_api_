import React, { Component } from 'react';
import axios from 'axios';

//TODO create paragraphs for longer descriptions (Optional)


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
    let formattedMaterials;
    let materialsSplit = [];
    if(this.state.course.materialsNeeded !== null){
   let n = 0;
   let materials = this.state.course.materialsNeeded;
   console.log(materials);
   if(materials.includes("*")){
      materialsSplit = materials.split("*");
   }else if(materials.includes("\n")){
    materialsSplit = materials.split("\n");
   }else if(materials.includes(" ")){
      materialsSplit = materials.split(" "); 
   }else if(materials !== ""){
     materialsSplit = [materials]
   }
   console.log(materialsSplit);
   let materialsArray = [materialsSplit];
   console.log(materialsArray)
   formattedMaterials = materialsSplit.map(material => {
       if(material !== "" && materials !== "" && materials !== "\n" ){
        n+=1;
       return(
           <li key={n}>{material}</li>
       )}
       return(formattedMaterials)
      })
      return(formattedMaterials)
    }else{
        formattedMaterials = <li key={110}>No materials Needed</li>
        return(formattedMaterials)
    }
}

//Function to create full name of course owner to publish
createName(){
    let firstName = this.state.course.User.firstName;
    let lastName = this.state.course.User.lastName;
    let fullName = firstName + " " + lastName;
    return fullName
}

//Function to check if currentUser is authorized, to display or hide update and delete buttons
authCheck(){
  const {loaded} = this.state;
  const {context} = this.props
  const authUserId = context.authenticatedUser;
  
  if(loaded){
    if(authUserId){
      if(this.state.course.userId === context.authenticatedUser[0].id){
        return(
          <span>
            <a className="button" 
               href={'/course/' + this.state.course.id + '/update'}>
                Update Course
              </a>
              <a className="button" href={'/course/' + this.state.course.id + '/delete'}>
                Delete Course
              </a>
          </span>
        )
}}}}

//Function to check if estimatedTime exist, if it does, format it ready for publishing
checkTime(){
  const time = this.state.course.estimatedTime;
  if(time){
    if(time.includes("hours") || time.includes("hour")){
    return(
      <li className="course--stats--list--item">
      <h4>Estimated Time</h4>
      <h3>{time}</h3>
      </li>
    )
  }else if(time !== "1"){
    return(
      <li className="course--stats--list--item">
      <h4>Estimated Time</h4>
      <h3>{time + " hours"}</h3>
      </li>
    )
  }else{
    return(
      <li className="course--stats--list--item">
      <h4>Estimated Time</h4>
      <h3>{time + " hour"}</h3>
      </li>
    )
  }
}
}

render(){
    if(this.state.loaded){
    return(
        <div>
        <div>
        <div className="actions--bar">
          <div className="bounds">
            <div className="grid-100">
           
             {this.authCheck()}
              
              <a className="button button-secondary" href="/">Return to List</a></div>
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
                
                 {this.checkTime()}
                 
                
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