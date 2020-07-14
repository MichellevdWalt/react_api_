import React, { Component } from 'react';
import Form from './Form';


class Delete extends Component{
    state = {
        course: [],
        loaded: false,
        errors: []
    }

//Get course from API
async getCourse(){
    const {match, context} = this.props
    const courseId = match.params.id;
        context.data.getCourse(courseId)
            .then(response => this.setState({
                    course: response[0],
                    loaded: true
    }))
}

//Get course from API when component mounts
componentDidMount(){
 this.getCourse()
}

render(){
    const {context} = this.props;
    if(this.state.loaded){
        if(this.state.course.userId === context.authenticatedUser[0].id){
    return(
        <div>
         <Form
                  errors = {this.state.errors}
                  submitButtonText="Delete"
                  cancel = {this.cancel}
                  submit = {this.submit}
                  elements= {()=>(
                    <React.Fragment>
                        <div>
                            <h1> Are you sure you want to delete this course?</h1>
                            <br />
                            <h1>{this.state.course.title}</h1>
                            <div className="course--description">
                                <p>Description: {this.state.course.description}</p>
                            </div>
                        </div>
                    </React.Fragment>
                  )}>
        </Form>
       
        </div>
    )
        }else{
            this.props.history.push("/forbidden");
        }
    } else {
        return(
            <div>
                <p>Loading...</p>
            </div>
        )
    }

}
submit = ()=>{
    const { context } = this.props;
    const courseId = this.props.match.params.id;
    const {emailAddress, password} = context.authenticatedUser[0]
  
    context.data.deleteCourse(courseId, emailAddress, password)
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

  cancel = () => {
    const courseId = this.props.match.params.id;
    this.props.history.push('/courses/' + courseId);
  }
}
export default Delete