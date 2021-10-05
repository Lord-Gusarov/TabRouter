import React from 'react'
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom';

export default function Leadership () {
    let match = useRouteMatch()
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to={`${match.url}/behaviours`}>Behaviors</Link>
            </li>
            <li>
              <Link to={`${match.url}/opportunities`}>Opportunities</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path={`${match.url}/behaviours`}>
           <h1>Behaviors</h1>
          </Route>
          <Route path={`${match.url}/opportunities`}>
            <h1>Opportunities</h1>
          </Route>
          <Route path={match.url}>
            <h1>Leadership home</h1>
          </Route>
        </Switch>
      </div>
  );
}