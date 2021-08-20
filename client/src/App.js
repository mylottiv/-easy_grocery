import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Landing from './views/Landing';
import Dashboard from './views/Dashboard';
import Inventory from './views/Inventory';
import TopNavbar from './TopNavbar';

function App() {
  return (
    <Router>
      <div className='landing-body'> 
        <div className='landing-body-overlay'>
          <Switch>
            <Route path="/dashboard">
              <TopNavbar loggedIn />
              <Dashboard />
            </Route>
            <Route path="/inventory">
              <TopNavbar loggedIn />
              <Inventory />
            </Route>
            <Route path="/shopping">
              <TopNavbar loggedIn />
              <div>Shopping</div>
            </Route>
            <Route path="/">
              <TopNavbar />
              <Landing />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
