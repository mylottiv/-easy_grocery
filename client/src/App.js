import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Landing from './views/Landing';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import Inventory from './views/Inventory';
import Shopping from './views/Shopping';
import Login from './views/Login';
import TopNavbar from './components/TopNavbar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <TopNavbar loggedIn />
          <div className='landing-body'> 
            <div className='landing-body-overlay'>
              <Dashboard />
            </div>
          </div>
        </Route>
        <Route path="/profile">
          <TopNavbar loggedIn />
          <div className='landing-body'> 
            <div className='landing-body-overlay'>
              <Profile />
            </div>
          </div>
        </Route>
        <Route path="/inventory">
          <TopNavbar loggedIn />
          <div className='landing-body'> 
            <div className='landing-body-overlay'>
              <Inventory />
            </div>
          </div>
        </Route>
        <Route path="/shopping">
          <TopNavbar loggedIn />
          <div className='landing-body'> 
            <div className='landing-body-overlay'>
              <Shopping />
            </div>
          </div>
        </Route>
        <Route path="/login">
          <TopNavbar />
          <div className='landing-body'> 
            <div className='landing-body-overlay'>
              <Login />
            </div>
          </div>
        </Route>
        <Route path="/">
          <TopNavbar />
          <div className='landing-body'> 
            <div className='landing-body-overlay'>
              <Landing />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
