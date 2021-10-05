import React, { useState } from "react";
import { Link, Switch, Route, useRouteMatch, Redirect} from "react-router-dom";

const TabRouter = (props) => {
  const { icon, title, feat, tabs, extraComponent } = props;
  let match = useRouteMatch();
  const [ activeTabId, setActiveTabId ] = useState(0)
  

  return (
    <div className="tabRouter" style={{ height: "99px", width: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
            <img className="tab-router-icon" src={icon} alt="Icon" />
            <div className="tab-router-header">{title}<span className="feat"> {feat}</span></div>
          </div>
          <div>
              {tabs.map((tab, id) => {
                return (
                        <Link 
                            to={`${match.url}${tab.to}`}
                            onClick={() => setActiveTabId(id)}
                            className={(id === activeTabId) ? "active": ""}
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
      <hr/>
      <Switch>
        {tabs.map((tab) => {
          return <Route path={`${match.url}${tab.to}`} key={tab.to}>{tab.component}</Route>;
        })}
        <Route path={match.url}>
            <Redirect to={`${match.url}${tabs[0].to}`} />
        </Route>
      </Switch>
    </div>
  );
};

export default TabRouter;
