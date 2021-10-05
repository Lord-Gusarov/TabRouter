import React from 'react'
import TabRouter from '../TabRouter/TabRouter'

export default function Teamwork () {
    const tabs = [
        {
            title: "Teamwork Analytics",
            to: "/analytics",
            component: (<h2>TB Analytics</h2>)
        },
        {
            title: "Workweek Aligment",
            to: "/workweek_aligment",
            component: (<h2>TB Workweek</h2>)
        },
        {
            title: "Culture Aligment",
            to: "/culture_aligment",
            component: (<h2>TB Culture</h2>)
        }
    ]

    return (
        <div style={{width: "100%"}}>
            <TabRouter
            icon="path/to/icon"
            title="Teamwork"
            feat="BETA"
            tabs={tabs}
            extraComponent="ExtraComp"
            />
        </div>
    )
}