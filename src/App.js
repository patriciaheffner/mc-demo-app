import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import './App.css'
import Page from './Page.jsx'
let csv = require('./assets/stock_photo_coolness.csv');
const home = csv.shift();

const User = ({ match }) => (
  <Page data={csv.find(obj => obj.Demographic === match.params.location) || home} />
)


const LocationRouter = () => (
  <Router>

    <div>
      <ul>
      <li key={'home'}><Link to="/index">Home</Link></li>
      {csv.map(location => (
          <li key={location.Demographic}>
            <Link to={`${location.Demographic}`}>
              {location.Demographic}
            </Link>
          </li>
        ))}
      </ul>
    

    <Switch>
      <Route path="/index" component={User} />
      <Route path="/:location" component={User} />
    </Switch>
    </div>
  </Router>
)

export default LocationRouter