import React from 'react'
import {Avatar} from '@material-ui/core';
import db from './firebase'
import './SideBarChat.css'
const SideBarChat = ({addNewChat,id,name}) => {
    const createChat=()=>{
        const roomName=prompt("Please enter name for chat")
        if(roomName){
            db.collection('rooms').add({
                name:roomName
            })
        }
    }
    return !addNewChat?(
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>This is the last message</p>
            </div>
        </div>

    )
    :(
        <div onClick={createChat} className='sidebarChat'>
            <h2>Add New Chat</h2>
        </div>
    )
}

export default SideBarChat
