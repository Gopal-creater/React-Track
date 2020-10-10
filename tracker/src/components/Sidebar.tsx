import React from 'react'
import { NavLink } from 'react-router-dom';
import '../css/sidebar.css'
import Logo from '../static/Logo.svg'

const Sidebar: React.FC = () =>{
    return (
        <>
            <div className="tracker-sidebar-header">
                <header>
                    <img src={Logo} alt="Girl in a jacket" style={{padding:"5px",backgroundColor:"grey", borderRadius:'50vw 50vh' }} />
                </header>
            </div>
            <div className="tracker-sidebar-navigation">
                <NavLink exact activeClassName="active-sidebar" to='/'>Dashboard</NavLink>
                <NavLink exact activeClassName="active-sidebar" to='/Issues'>Issues</NavLink>
                <NavLink exact activeClassName="active-sidebar" to='/Create'> Create</NavLink>
            </div>
        </>
    )
}

export default Sidebar;