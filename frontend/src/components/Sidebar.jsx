import React from 'react'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <aside className="menu has-shadow">
            <p className="menu-label">
                General
            </p>
            <ul className="menu-list">
                <li>
                    <NavLink to={'/dashboard'}>Dashboard</NavLink>
                </li>
            </ul>
            <p className="menu-label">
                Administration
            </p>
            <ul className='menu-list'>
                <li>
                    <NavLink to={'/'}>Manajemen User</NavLink>
                </li>
                <li>
                    <button className="button is-white">
                        Logout
                    </button>
                </li>
            </ul>
            </aside>
    </div>
  )
}

export default Sidebar