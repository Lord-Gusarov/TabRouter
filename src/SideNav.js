import React from "react";
import {
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Leadership from "./Tabs/Leadership";
import Teamwork from "./Tabs/Teamwork";
import Wellbeing from "./Tabs/Wellbeing"

export default function SideNav() {
  return (
      <div style={{display: "flex"}}>
        <nav className="navcontainer" style={{height: "100vh", width: "279px", borderRight: "2px solid red", backgroundColor: "lightgray"}}>
          <ul>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
            <li>
                <Link to="/teams">TEAMS</Link>
            </li>
            <li>
              <Link to="/leadership">Leadership</Link>
            </li>
            <li>
              <Link to="/teamwork">Teamwork</Link>
            </li>
            <li>
              <Link to="/wellbeing">Wellbeing</Link>
            </li>
            <li>
              <Link to="/digital">Digital EQ</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/feed">
            <h2>My Feed</h2>
          </Route>
          <Route path="/teams">
            <h2>Teams</h2>
          </Route>
          <Route path="/leadership">
            <Leadership />
          </Route>
          <Route path="/teamwork">
            <Teamwork />
          </Route>
          <Route path="/wellbeing">
            <Wellbeing />
          </Route>
          <Route path="/digital">
            <h1>Digital EQ</h1>
          </Route>
          <Route path="/">
              <Redirect to="/feed" />
          </Route>
        </Switch>
      </div>
  );
}