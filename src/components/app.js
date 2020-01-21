import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './home';
import OfficePage from './office';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.PureComponent {
    render() {
        return <BrowserRouter>
            <main>
                <div className="container">
                    <Switch>
                        <Route path="/" component={HomePage} exact />
                        <Route path="/office" component={OfficePage} exact />
                    </Switch>
                </div>
            </main>
        </BrowserRouter>
    }
}

export default App;