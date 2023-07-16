import React from 'react'
import "./PageNotFound.css";
import { Button } from 'react-bootstrap'
import "./PageNotFound.css";
function PageNotFound() {
    return (
        <div className="hide-navbar">
            <h1 className="p-4">Page you are looking for does not exist!</h1>
            <Button className="m-2" variant="primary"  > <a href="/">Home</a></Button>
          
        </div>
    );
}

export default PageNotFound;
