import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Landing from './views/Landing';
import Dashboard from './views/Dashboard';
import TopNavbar from './TopNavbar';

function App() {
  return (
    <Router>
      <div className='landing-body'> 
        <div className='landing-body-overlay'>
          <TopNavbar />
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/inventory">
              <div>Inventory</div>
            </Route>
            <Route path="/shopping">
              <div>Shopping</div>
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
