import React from 'react';
import Header from './Header';

//TODO put in an if error or create a separate error page? See markup

function Error(){
    return(
        <div>
            <Header />
            <div class="bounds">
            <h1>Not Found</h1>
            <p>Sorry! We couldn't find the page you're looking for.</p>
            <a className="button" href="/">Back to Safety</a>
            </div>
        </div>
    )
}

export default Error;