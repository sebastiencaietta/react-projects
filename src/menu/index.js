import React from 'react';
import {Jumbotron, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const Example = props => {
    return (
        <Jumbotron>
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">This is a simple React SPA that I'm using to extend my knowledge of React.</p>
            <hr className="my-2"/>
            <p>
                It was created using the create-react-app tool, and only contains one project at the moment, a
                notepad <br/>
                This notepad uses React, Redux and ReactRouter. It uses the browser localStorage to get and save
                notes
            </p>
            <p className="lead">
                <Button color="primary" tag={Link} to="/notes">Check it out!</Button>
            </p>
        </Jumbotron>
    );
};

export default Example;