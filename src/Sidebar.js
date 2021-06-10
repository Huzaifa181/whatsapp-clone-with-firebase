import React ,{useEffect,useState}from 'react'
import db from './firebase'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {Avatar,IconButton} from '@material-ui/core';
import SideBarChat from './SideBarChat'
import './Sidebar.css'
const Sidebar = () => {
    const [rooms,setRooms]=useState([])
    useEffect(()=>{
        const unsubscribe=db.collection("rooms").onSnapshot((snapshot)=>{
            // console.log("h",snapshot.docs[0].doc.data())
            setRooms(snapshot.docs.map(doc=>{
                return({
                    id:doc.id,
                    data:doc.data()
                })
            }))
        })
        return()=>{
            unsubscribe()
        }
    },[])
console.log(rooms)
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
                <SideBarChat addNewChat/>
                {rooms.map(room=>{
                    return(
                        <SideBarChat
                    key={room.id}
                    id={room.id}
                    name={room.data.name}
                    />
                    )
                    
                })}
            </div>
        </div>
    )
}

export default Sidebar