import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Layout = (props) => {
  return (
    <React.Fragment>
        <Navbar />
        <div className="column mt 6">
            <div className="column is-2">
                <Sidebar />
            </div>
            <div className="column has-background-light">
                <main>{props.children}</main>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Layout