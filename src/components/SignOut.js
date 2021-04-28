import React from 'react';
import { Link } from 'react-router-dom';

const SignOut =()=>{
    return(<div>
    <pre>
        You have been succesfully signed out.
    </pre>
    <Link to="/">
    <button>Home</button></Link>
    </div>
    )
}
export default SignOut;