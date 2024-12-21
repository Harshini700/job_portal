// src/App.js
import 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/authcontext';
import Login from './components/login';
import Register from './components/register';
import JobList from './components/joblist';
import Profile from './components/profile';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/" exact component={JobList} />
                    </Switch>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
