import React from 'react'
import TabRouter from '../TabRouter/TabRouter'

import { LeadershipIcon } from '../FeedCategoryIcons';
export default function Leadership () {
    const tabs = [
        {
            title: "Behaviors",
            to: "/behaviors",
            component: (<h2>TR behaviors</h2>)
        },
        {
            title: "Opportunities",
            to: "/opportunities",
            component: (<h2>TR Opportunities</h2>)
        },
        {
            title: "Relationships",
            to: "/relationships",
            component: (<h2>TR Relationships</h2>)
        }
    ]
  return (
      <TabRouter
        Icon={LeadershipIcon}
        title="Leadership"
        tabs={tabs}
        extraComponent={(<h3>Extra Leadership</h3>)}
        />
  );
}