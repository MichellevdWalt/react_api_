import React from 'react';

function UnhandledError(){
    return(
        <div>
            <div className="bounds">
            <h1>Error</h1>
            <p>Sorry! An unexpected error occurred.</p>
            <a className="button" href="/">Back to Safety</a>
            </div>
        </div>
    )
}

export default UnhandledError;