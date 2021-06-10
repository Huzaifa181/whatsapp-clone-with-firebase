import React from 'react'
import './Login.css'
import {auth, provider} from './firebase'
import {Button} from '@material-ui/core';
const Login = () => {
    const signIn=()=>{
        console.log("ju")
        auth.signInWithPopup(provider).then(result=>{
            console.log(result)
        })
        .catch(err=>{
            alert(err.message)
        })
    }
    return (
        <div className='login'>
            <div className='login__container'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' alt='whatsapp logo'/>
                <div className='login__text'>
                    <h1>
                        Signin to Whatsapp
                    </h1>
                </div>
                <Button onClick={signIn}>
                    Signin with Google
                </Button>
            </div>
        </div>
        
    )
}

export default Login
