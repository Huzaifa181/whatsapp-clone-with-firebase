import React from 'react'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {Avatar,IconButton} from '@material-ui/core';
import SideBarChat from './SideBarChat'
import './Sidebar.css'
const Sidebar = () => {
    return ( 
        <div className = 'sidebar' >
            <div className="sidebar__header">
                <Avatar/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className='sidebar__searchContainer'>
                    <SearchOutlinedIcon/>
                    <input placeholder="Search or Start Now chat" type="text"/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
            </div>
        </div>
    )
}

export default Sidebar