import React,{useState,useEffect} from 'react'
import {Avatar,IconButton} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import MicIcon from '@material-ui/icons/Mic';
import {useStateValue} from './StateProvider'
import {useParams} from "react-router-dom";
import firebase from 'firebase'
import db from './firebase'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import './Chat.css'
import axios from './axios'
const Chat = () => {
    const[{user},dispatch]=useStateValue();
    const {roomId}=useParams()
    const [input, setInput]=useState("")
    const [roomName, setRoomName]=useState("")
    const [messages, setMessages]=useState([])
    const sentMessage=async (e)=>{
       e.preventDefault();
       db.collection('rooms').doc(roomId)
            .collection('messages').add({
                message:input,
                name:user.displayName,
                timestamp:firebase.firestore.FieldValue.serverTimestamp()
            })
       setInput('')
    }
    useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot=>{
                setRoomName(
                    snapshot.data().name
                )
            })
            db.collection('rooms').doc(roomId)
            .collection('messages').orderBy('timestamp','asc')
            .onSnapshot(snapshot=>{
                setMessages(
                    snapshot.docs.map(doc=>{
                        return(
                            doc.data()
                        )
                    })
                )
            })
        }

    },[roomId])
    return (
        <div className='chat'>
           <div className='chat__header'>
            <Avatar/>
            
            <div className='chat__headerInfo'>
                <h3>{roomName}</h3>
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
        {messages.map((mssg)=>{
            return(

                <p className={`chat__message ${mssg.name==user.displayName && "chat__receiver"}`}>
                    <span className='chat__name'>{mssg.name}</span>
                    {mssg.message}
                    <span className="chat__timestamp">
                        {new Date(mssg.timestamp?.toDate()).toUTCString()}
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
