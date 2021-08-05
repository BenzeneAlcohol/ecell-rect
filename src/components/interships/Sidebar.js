import React from 'react'
import './Sidebar.css'
import WorkIcon from '@material-ui/icons/Work';
import ComputerIcon from '@material-ui/icons/Computer';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import GestureIcon from '@material-ui/icons/Gesture';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Interships
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkIcon/>
                            <p>Internships</p>
                        </li>
                    </ul>
                </div>
                    <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Categories
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <ComputerIcon/>
                            <p>Web Development</p>
                        </li>
                        <li className="sidebarListItem">
                            <GestureIcon/>
                            <p>Artist</p>
                        </li>
                        <li className="sidebarListItem">
                            <AssignmentIcon/>
                            <p>Content Writing</p>
                        </li>
                        <li className="sidebarListItem">
                            <AccountBalanceIcon/>
                            <p>Digital Marketing</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
