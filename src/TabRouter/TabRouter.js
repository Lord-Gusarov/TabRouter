import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";

const TabRouter = (props) => {
  const { icon, title, feat, tabs, extraComponent } = props;
  let match = useRouteMatch();

  return (
    <div className="tabRouter" style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <h3>{icon}</h3>
            <h1>{title}</h1>
            <h4>{feat}</h4>
          </div>
          <div>
              {tabs.map((tab, i) => {
                return (
                    <>
                        <Link style={{textDecoration: "none"}} to={`${match.url}${tab.to}`}>
                                {tab.title}
                        </Link>
                    </>
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
          return <Route path={`${match.url}${tab.to}`}>{tab.component}</Route>;
        })}
      </Switch>
    </div>
  );
};

export default TabRouter;
