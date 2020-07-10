import React, { Component } from 'react';
import Form from './Form';

class UpdateCourse extends Component{
    state = {
        course: this.getCourse(),
        userId: "",
        loaded: false,
        title: "",
        description: "",
        estimatedTime: "",
        materialsNeeded: [],
        firstName: "",
        lastName: "",
        errors: []
    }

    async getCourse(){
      const {context, match } = this.props;
      const courseId = match.params.id;
      context.data.getCourse(courseId)
        .then(response => {
          console.log(response)
          this.setState({
            userId: response[0].User.id,
            firstName: response[0].User.firstName,
            lastName: response[0].User.lastName,
            course: response[0],
            title: response[0].title,
            description: response[0].description,
            estimatedTime: response[0].estimatedTime,
            materialsNeeded: response[0].materialsNeeded,
            loaded: true
          })
        })      
    }

    render(){
      const {
        title,
        description,
        estimatedTime,
        materialsNeeded,
        firstName,
        lastName,
        errors,
        loaded,
        userId
      } = this.state;

      const {context} = this.props
      
      
        if(loaded){       
          if(userId === context.authenticatedUser[0].id){   
            return(
                <div>
                <div className="bounds course--detail">
                <h1>Update Course</h1>
                <div>
                <Form
                  errors={errors}
                  submitButtonText="Update"
                  cancel = {this.cancel}
                  submit = {this.submit}
                  elements= {()=>(
                  <React.Fragment>
                    <div className="grid-66">
                      <div className="course--header">
                        <h4 className="course--label">Course</h4>
                        <div>
                          <input 
                            id="title" 
                            name="title" 
                            type="text" 
                            className="input-title course--title--input" 
                            value={title} 
                            onChange={this.change}
                          >
                          </input>
                        </div>
                        <p>By {firstName} {lastName}</p>
                      </div>
                      <div className="course--description">
                        <div>
                          <textarea 
                            id="description" 
                            name="description" 
                            className="" 
                            placeholder="Course description..."
                            value= {description}
                            onChange = {this.change}
                            >
                          </textarea>
                        </div>
                      </div>
                    </div>
                    <div className="grid-25 grid-right">
                      <div className="course--stats">
                        <ul className="course--stats--list">
                          <li className="course--stats--list--item">
                            <h4>Estimated Time</h4>
                            <div>
                              <input 
                              id="estimatedTime" 
                              name="estimatedTime" 
                              type="text" 
                              className="course--time--input"
                              placeholder="Hours" 
                              value={estimatedTime}
                              onChange={this.change}
                              ></input>
                            </div>
                          </li>
                          <li className="course--stats--list--item">
                            <h4>Materials Needed</h4>
                            <div>
                              <textarea 
                                id="materialsNeeded" 
                                name="materialsNeeded" 
                                className="" 
                                placeholder="List materials..."
                                value={materialsNeeded}
                                onChange = {this.change}
                              ></textarea>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    </React.Fragment>
                  )}>
                </Form>
                </div>
              </div>
              </div>
            )
          }else{
            this.props.history.push('/forbidden');
          }
          }else{
            return(
              <div>
                <h1>Loading...</h1>
              </div>
            )
          }
        
        }
        
      
    change = (event) => {
      const name = event.target.name;
      const value = event.target.value;
    
      this.setState(() => {
        return {
          [name]: value
        };
      });
    }

    submit = ()=>{
      const { context } = this.props;
      const {
        userId,
        title,
        description,
        materialsNeeded,
        estimatedTime
      } = this.state;
      const courseId = this.props.match.params.id;
    
      // Create user
      const course = {
        userId,
        title,
        description,
        materialsNeeded,
        estimatedTime
      };
      const {emailAddress, password} = context.authenticatedUser[0]
    
      context.data.updateCourse(courseId, course, emailAddress, password)
        .then( errors => {
          if (errors.length !== 0) {
            console.log(errors);
              this.setState({ errors });
          } else {
            this.props.history.push('/courses/' + courseId);
          }
        })
        .catch((err) => {
          console.log(err);
          this.props.history.push('/error');
        });
    
    }

    cancel = () => {
      const courseId = this.props.match.params.id;
      this.props.history.push('/courses/' + courseId);
    }
}

export default UpdateCourse
