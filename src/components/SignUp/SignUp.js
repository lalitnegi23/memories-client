import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = ()=>{
    const [formData,setFormData] = useState({
        fullName : '',
        userName : '',
        email : '',
        password : ''
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('https://memories-server-backend.herokuapp.com/api/signup',formData)
        .then(res=> console.log(res.data));
    }
    
return(
    <div className="container">
        <h1>Signup</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" name="fullName" value={formData.fullName} onChange={(e)=>setFormData({...formData, fullName:e.target.value})}/>
        <input type="text" placeholder="Username" name="userName" value={formData.userName} onChange={(e)=>setFormData({...formData, userName:e.target.value})}/>
        <input type="email" placeholder="E-mail" name="email" value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})}/>
        <input type="password" placeholder="Password" name="password" value={formData.password} onChange={(e)=>setFormData({...formData, password:e.target.value})}/>
        <input type="submit" value="Submit"/>
        <pre>
            Already have an account?  
            <Link to="/signin"><button>Sign in</button></Link>  
        </pre>
        <pre>
            Corona Virus India Tracker
        <Link to="/coronatracker"><button>Check</button></Link>
        </pre>
    </form>
    </div>
)
}

export default SignUp;