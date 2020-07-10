import React from 'react';


function NotFound(){
    return(
        <div>
            <div className="bounds">
            <h1>Not Found</h1>
            <p>Sorry! We couldn't find the page you're looking for.</p>
            <a className="button" href="/">Back to Safety</a>
            </div>
        </div>
    )
}

export default NotFound;