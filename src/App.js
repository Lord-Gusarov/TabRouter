import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Leadership from "./Tabs/Leadership";
import Teamwork from "./Tabs/Teamwork";
import SideNav from "./SideNav";
import './App.css'

export default function App() {
  return (
    <Router basename="dashboard">
      <div >
        <div
          style={{
            height: "40px",
            width: "100%",
            backgroundColor: "lightblue",
          }}
        >
          <div style={{justifyItems: "center"}}>Header</div>
        </div>
        <div style={{}}>
          <SideNav />
        </div>
      </div>
    </Router>
  );
}
