import React, { Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Start from './Start/pages/Start';
import Register from './Auth/pages/Register';
import Login from './Auth/pages/Login';
import { AuthContext } from './Shared/context/auth-context';
import { useAuth } from './Shared/hooks/auth-hook';
import './App.css';
import LoadingSpinner from './Shared/components/UIElements/LoadingSpinner';

const Lobby = React.lazy(() => import('./Start/pages/Lobby'))
const Test = React.lazy(() => import('./Questionnaire/pages/Test'))


const App = () => {

  const { token, userName, login, logout } = useAuth();

  let routes;

  if (!token) {
    routes = (
      <Switch>
        <Route path="/" exact component={Start} />
        <Route path="/signup" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Redirect to="/" />
      </Switch>
    )
  } else {
    routes = (
      <Switch>
        <Route path="/" exact component={Lobby} />
        <Route path="/test" exact component={Test} />
        <Redirect to="/" />
      </Switch>
    )
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn: !!token, token: token, userName: userName, login: login, logout: logout }}>
      <Router>
        <Suspense fallback={<div className="loadingSpinner--center"> <LoadingSpinner/> </div>}>{routes}</Suspense>
      </Router>
    </AuthContext.Provider>
  );
}


export default App;