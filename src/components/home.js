import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends React.PureComponent {
    render() {
        return <div>
            <h2>Enter Page</h2>
            <hr />
            <p className="alert alert-succes">
                Please, enter your name and password!
            </p>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Link to="/office" className="btn btn-primary">
                    Enter
                </Link>
            </Form>
        </div>
    }
};

export default Home;