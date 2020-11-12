import React from 'react';

export default (props) => {
  const {
    cancel,
    errors,
    submit,
    submitButtonText,
    elements,
  } = props;

  function handleSubmit(event) {
    event.preventDefault();
    submit();
  }

  function handleCancel(event) {
    event.preventDefault();
    cancel();
  }

  return (
    <div>
      <ErrorsDisplay errors={errors} />
      <form onSubmit={handleSubmit}>
        {elements()}
        <div className="pad-bottom">
          <button className="button" type="submit">{submitButtonText}</button>
          <button className="button button-secondary" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}


//Function to format errors and return them in the correct format
function ErrorsDisplay({ errors }) {
  let errorsDisplay = null;
  let errorArray = [];

  let getErrors = errors.Error
  
  if (getErrors !== undefined){
  let toArray = Array(getErrors);

  if (toArray[0] !== undefined) {
    if(toArray[0].includes(",")){
    errorArray = toArray[0].split(",");
    errorArray = Array(errorArray);
    }else{
    errorArray = Array(toArray[0])
    }
    let finalArray = [];
    for(var i = 0; i < errorArray[0].length; i +=1){
      if(errorArray[0][i].includes("Validation error:")){
        finalArray.push(errorArray[0][i].substring(18));
      }else{
        finalArray.push(errorArray[0][i]);
      }
    }  

    errorsDisplay = (
      <div>
        <h2 className="validation--errors--label">Validation errors</h2>
        <div className="validation-errors">
          <ul>
            {finalArray.map((error, i) => <li key={i}>{error}</li>)}
          </ul>
        </div>
      </div>
    );
  }
  }else if(errors.length !== 0) {
    errorsDisplay = (
      <div>
        <h2 className="validation--errors--label">Validation errors</h2>
        <div className="validation-errors">
          <ul>
            {errors.map((error, i) => <li key={i}>{error}</li>)}
          </ul>
        </div>
      </div>
    )
  }
  return errorsDisplay;
}
