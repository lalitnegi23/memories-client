import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Memories from './Memories';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import CoronaTracker from './components/CoronaTracker/CoronaTracker';
import SignOut from './components/SignOut';

const App=()=>{

    // const [redirect,setRedirect] = useState('')
    
    // function auth (){
    //     axios.post('http://localhost:3200/api/signin',signIn)
    //     .then(res=> {
    //         if(res.data === 'Signed in') setRedirect(true)
    //     });
    // }

    return(
        <BrowserRouter>
        <Route exact path ="/" component={SignUp}/>
        {/* {redirect ? <Route path ="/memories" component={Memories}/> : null} */}
        <Route path ="/memories" component={Memories}/>
        <Route path ="/coronatracker" component={CoronaTracker}/>
        <Route path ="/signin" component={SignIn}/>
        <Route path ='/signout' component={SignOut}/>
        </BrowserRouter>

    )
}

export default App;