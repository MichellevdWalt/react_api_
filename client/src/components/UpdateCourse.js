import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header'

class UpdateCourse extends Component{
    state = {
        course: [],
        loaded: false
    }

//Function to get details of current course and pre-populate fields with it
getCurrentCourse(){
    axios.get("http://localhost:5000/api/courses/" + this.props.id)
    .then(response => this.setState({
        course: response.data[0],
        loaded: true
    }))
}

componentDidMount(){
    this.getCurrentCourse();
}

componentDidUpdate(){
    console.log(this.state)
}
 
//Function to update course in database
update(){
    axios.put("http://localhost:5000/api/courses/" + this.props.id)
}
//TODO Add .then() for success or not... 

//TODO See comments below
//TODO Insert if(this.state.loaded) 
//TODO delete todo comments below
    render(){
        return(
            <div>
            <Header />
            <div className="bounds course--detail">
            <h1>Update Course</h1>
            <div>
              <form>
                <div className="grid-66">
                  <div className="course--header">
                    <h4 className="course--label">Course</h4>
                    <div><input id="title" name="title" type="text" className="input-title course--title--input" value="Title" onChange=""
                        ></input></div>
                        {/* Insert current title here */}
                    <p>By Current user</p>
                    {/* Import current user here */}
                  </div>
                  <div className="course--description">
                    <div><textarea id="description" name="description" className="" placeholder="Course description...">
                        Course description
                        {/* Insert current course description text here */}
                    </textarea></div>
                  </div>
                </div>
                <div className="grid-25 grid-right">
                  <div className="course--stats">
                    <ul className="course--stats--list">
                      <li className="course--stats--list--item">
                        <h4>Estimated Time</h4>
                        <div><input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input"
                            placeholder="Hours" >{/* Insert current estimated time if any */}</input></div>
                      </li>
                      <li className="course--stats--list--item">
                        <h4>Materials Needed</h4>
                        <div><textarea id="materialsNeeded" name="materialsNeeded" className="" placeholder="List materials...">* 1/2 x 3/4 inch parting strip
    * 1 x 2 common pine
    {/*  Insert materials needed if any */}
    </textarea></div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid-100 pad-bottom"><button className="button" type="submit" onSubmit={this.update()}>Update Course</button><a className="button button-secondary" href="/">Cancel</a></div>
              </form>
            </div>
          </div>
          </div>
        )
    }
}

export default UpdateCourse
