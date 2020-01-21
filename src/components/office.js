import React from 'react';
import userStore from '~/store/user';
import { observer } from '~/noobx/react';

class Office extends React.PureComponent {
    render() {
        return <div>
            <h1>Hello, {userStore.user.name}!</h1>
        </div>
    }
};

export default observer(Office);