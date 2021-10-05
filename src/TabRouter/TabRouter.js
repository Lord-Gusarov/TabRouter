import React, { useState } from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";

const TabRouter = (props) => {
  const { icon, title, feat, tabs, extraComponent } = props;
  let match = useRouteMatch();
  const [ activeTabId, setActiveTabId ] = useState(0)
  function tabClasses(id) {
      if (id === activeTabId) {
          return "active"
      }else {
          return ""
      }
  }

  return (
    <div className="tabRouter" style={{ height: "99px", width: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>{icon}</div>
            <div>{title}</div>
            <div className="feat">{feat}</div>
          </div>
          <div>
              {tabs.map((tab, id) => {
                return (
                        <Link 
                            to={`${match.url}${tab.to}`}
                            onClick={() => setActiveTabId(id)}
                            className={tabClasses(id)}
                            key={tab.title}
                        >
                            {tab.title}
                        </Link>
                );
              })}

          </div>
        </div>
        <div>
          <h2>{extraComponent}</h2>
        </div>
      </div>

      <Switch>
        {tabs.map((tab) => {
          return <Route path={`${match.url}${tab.to}`} key={tab.to}>{tab.component}</Route>;
        })}
      </Switch>
    </div>
  );
};

export default TabRouter;
