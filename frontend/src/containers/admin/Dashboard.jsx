import React from 'react'
import "./Dashboard.css"
import ZdestinationList from './ZdestinationList'
import ListUsers from './ListUsers'

function Dashboard() {
  return (
    <div className='container-admin-dash'>
        <ZdestinationList/>
        <ListUsers/>

    </div>
  )
}

export default Dashboard