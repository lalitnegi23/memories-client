import React, { useState } from 'react';
import axios from 'axios';
import {  Redirect } from 'react-router-dom';

const SignIn=()=>{

    const [signIn,setSignIn] = useState({
        userName:'',
        password:''
    })
    const [redirect,setRedirect] = useState('')
    function handleSubmit(e){
        e.preventDefault();
        axios.post('https://memories-server-backend.herokuapp.com/api/signin',signIn)
        .then(res=> {
            if(res.data === 'Signed in'){
                setRedirect(true)
            }
        });
    }
    return(<div className="container">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={signIn.userName} onChange={(e)=>setSignIn({...signIn, userName:e.target.value})}/>
            <input type="password" placeholder="Password" value={signIn.password} onChange={(e)=>setSignIn({...signIn, password:e.target.value})}/>
            <input type="submit" value="Submit"/>
            {redirect ? <Redirect to="/memories"/> : null}
        </form>
        </div>
    )
}
export default SignIn;