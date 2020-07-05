import React, { Component } from 'react';
import axios from 'axios';

class CreateCourse extends Component{
  state = {
      course: [],
      loaded: false,
      created: false
  }

  create(){    
    axios.post("http://localhost:5000/api/courses")
    .then(console.log("created"))
  }

  render(){
      return(
        <div>
        <div className="bounds course--detail">
        <h1>Create Course</h1>
        <div>
          <div>
            <h2 className="validation--errors--label">Validation errors</h2>
            <div className="validation-errors">
              <ul>
              {/* Code to display validation messages */}
                <li>Please provide a value for "Title"</li>
                <li>Please provide a value for "Description"</li>
              </ul>
            </div>
          </div>
          <form>
            <div className="grid-66">
              <div className="course--header">
                <h4 className="course--label">Course</h4>
                <div><input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..."
                    ></input></div>
                <p>By Current authorized</p>
                {/* Code for currently signed in */}
              </div>
              <div className="course--description">
                <div><textarea id="description" name="description" className="" placeholder="Course description..."></textarea></div>
              </div>
            </div>
            <div className="grid-25 grid-right">
              <div className="course--stats">
                <ul className="course--stats--list">
                  <li className="course--stats--list--item">
                    <h4>Estimated Time</h4>
                    <div><input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input"
                        placeholder="Hours"></input></div>
                  </li>
                  <li className="course--stats--list--item">
                    <h4>Materials Needed</h4>
                    <div><textarea id="materialsNeeded" name="materialsNeeded" className="" placeholder="List materials..."></textarea></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid-100 pad-bottom"><button className="button"  onClick={this.create()}>Create Course</button><a className="button button-secondary" href="/">Cancel</a></div>
          </form>
        </div>
      </div>
      </div>
      )
  }
}

export default CreateCourse