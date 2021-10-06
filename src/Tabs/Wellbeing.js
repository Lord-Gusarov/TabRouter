import React from 'react'
import TabRouter from '../TabRouter/TabRouter'
import { WellbeingIcon } from '../FeedCategoryIcons'

export default function Teamwork () {
    const tabs = [
        {
            title: "Cognitive Load",
            to: "/cognitive_load",
            component: (<h2>TB Analytics</h2>)
        },
        {
            title: "#Flex Calendar",
            to: "/flex",
            component: (<h2>TB Workweek</h2>)
        },
        {
            title: "Calendar Insights",
            to: "/insights",
            component: (<h2>TB Culture</h2>)
        }
    ]

    return (
            <TabRouter
            Icon={WellbeingIcon}
            title="Wellbeing"
            feat="BETA"
            tabs={tabs}
            extraComponent={<h5>ExtraComp</h5>}
            />
    )
}