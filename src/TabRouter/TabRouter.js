import React, { useState } from "react";
import { Link, Switch, Route, useRouteMatch, Redirect} from "react-router-dom";

const TabRouter = (props) => {
  const { Icon, title, feat, tabs, extraComponent } = props;
  let match = useRouteMatch();
  const [ activeTabId, setActiveTabId ] = useState(0)
  

  return (
    <div className="tabRouter" style={{ height: "100%", width: 'calc(100% - 27px)', display: "flex", flexDirection: "column", marginLeft: "27px", marginTop: "10px" }}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingBottom: "2px", borderBottom: "1px solid lightgrey" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "8px"}}>
            {<Icon style={{color:"#13C2C2", fontSize:"40px"}}/>}
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
          {extraComponent}
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
