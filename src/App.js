import React from "react";
import {
  HashRouter as Router,
} from "react-router-dom";

import SideNav from "./SideNav";
import './App.css'

export default function App() {
  return (
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
  );
}
