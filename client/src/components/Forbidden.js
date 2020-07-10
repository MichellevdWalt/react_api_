import React from 'react';


function Forbidden(){
    return(
        <div>
            <div className="bounds">
            <h1>Forbidden</h1>
            <p>Woops! Looks like you are not authorized on this route</p>
            <a className="button" href="/">Back to Safety</a>
            </div>
        </div>
    )
}

export default Forbidden;