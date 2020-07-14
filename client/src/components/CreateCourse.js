import React, { Component } from 'react';
import Form from './Form';


class CreateCourse extends Component{
  state = {
      title: "",
      description: "",
      estimatedTime: "",
      materialsNeeded: "",
      userId: this.props.context.authenticatedUser[0].id,
      errors: []
  }

  
  render(){
   const
     {title,
      description,
      estimatedTime,
      materialsNeeded, 
      errors} = this.state;
   
      return(
        <div>
        {console.log(this.state.authenticatedUser)}
        <div className="bounds course--detail">
        <h1>Create Course</h1>
        <div>
          <Form 
             errors={errors}
             submitButtonText="Create Course"
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
                    placeholder="Course title..."
                    value={title}
                    onChange = {this.change}
                  ></input>
                </div>
                <p>By {this.props.context.authenticatedUser[0].firstName} {this.props.context.authenticatedUser[0].lastName} </p>
                </div>
                <div className="course--description">
                <div>
                  <textarea 
                    id="description" 
                    name="description" 
                    className="" 
                    placeholder="Course description..."
                    value={description}
                    onChange = {this.change}
                  ></textarea>
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
                        onChange = {this.change}
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
                        value= {materialsNeeded}
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
  }

  //Function to handle change of text field values
  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value
      };
    });
  }

//Function to handle form submit
  submit = ()=>{
    const { context } = this.props;
    const {
      title,
      description,
      estimatedTime,
      materialsNeeded,
      userId,
    } = this.state;
  
    const course = {
      title,
      description,
      estimatedTime,
      materialsNeeded,
      userId
    };
    
    const {emailAddress, password} = context.authenticatedUser[0];
     
    context.data.createCourse(course, emailAddress, password)
      .then( errors => {
        if (errors.length !== 0) {
            this.setState({ errors });
        } else {
            this.props.history.push('/');    
            }
      })
      .catch((err) => {
        console.log(err);
        this.props.history.push('/error');
      });
  
  }

  //Function to handle form cancel button
  cancel = () => {
    this.props.history.push('/');
  }
}

export default CreateCourse