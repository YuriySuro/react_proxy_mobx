import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import userStore from '~/store/user';
import { observer } from '~/noobx/react';

class Home extends React.PureComponent {
    onChangeName = (e) => userStore.setName(e.target.value);

    render() {
        return <div>
            <h2>Enter Page</h2>
            <hr />
            <p className="alert alert-success">
                Please, enter your name and password!
            </p>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={userStore.user.name}
                        onChange={this.onChangeName} 
                    />
                </Form.Group>
                {userStore.isValid() && <Link to="/office" className="btn btn-primary">
                    Enter
                </Link>}
            </Form>
        </div>
    }
};

export default observer(Home);