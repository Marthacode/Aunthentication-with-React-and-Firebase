import React from 'react'
import './App.css'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import { AuthProvider } from './contexts/AuthContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import ForgotPassword from './components/ForgotPassword'
import UpdateProfile from './components/UpdateProfile'
console.log(process.env.REACT_APP_FIREBASE_API_KEY)

function App() {
      return (
      <Router>
        <AuthProvider>
          <div className="App container mt-4">
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
