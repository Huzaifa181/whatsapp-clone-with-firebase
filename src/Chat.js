import React,{useState} from 'react'
import {Avatar,IconButton} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import './Chat.css'
import axios from './axios'
const Chat = ({messages}) => {
    const [input, setInput]=useState("")
    const sentMessage=async (e)=>{
        e.preventDefault();
        await axios.post('/messages/new',{
            message:input,
            name:"Huzaifa",
            timestamp:new Date().toUTCString(),
            received:false
        })
        setInput('')
    }
    return (
        <div className='chat'>
           <div className='chat__header'>
            <Avatar/>
            
            <div className='chat__headerInfo'>
                <h3>Room name</h3>
                <p>Last Seen at</p>
            </div>
            <div className='chat__headerRight'>
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
            <div className='chat__body'>
                {messages.map(mssg=>{
                    return(

                <p className={`chat__message ${mssg.received && "chat__receiver"}`}>
                    <span className='chat__name'>{mssg.name}</span>
                    {mssg.message}
                    <span className="chat__timestamp">
                        {mssg.timestamp}
                    </span>
                </p>
                    )
                })}
               
            </div>
            <div className='chat__footer'>
                <InsertEmoticonIcon style={{color:"gray"}}/>
                <form>
                    <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type a message" type="text"/>
                    <button onClick={(e)=>sentMessage(e)} type="submit">Send a message</button>
                </form>
                <MicIcon style={{color:"gray"}}/>
            </div>
        </div>
    )
}

export default Chat
