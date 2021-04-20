import React, { useEffect } from 'react';
import './App.css';
import Header from './header'
import Sidebar from './sidebar'
import {
  BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Mail from './mail';
import EmailList from "./emailList"
import SendMail from './SendMail'
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice'
import { login, selectUser } from './features/userSlice';
import Login from './login';
import { auth } from './firebase';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(user=>{
      if (user){
        dispatch(login({
          displayName:user.displayName,
          email:user.email,
          photoUrl:user.photoURL
        }))
      }
    })
  
  }, [dispatch])
  
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);   
  const user = useSelector(selectUser) ;
  return ( 
    <Router>
      {
        !user?(
          <Login/>
        ):(
          <div className = "App" >
        <Header/>
        <div className="app-body">
          <Sidebar/>  
          <Switch>
            <Route path='/mail'>
              <Mail/>
            </Route>
            <Route path='/'>
              <EmailList/>
            </Route>
          </Switch>
        </div>
        {sendMessageIsOpen && <SendMail/>}
      </div > 
        )
      }
      
    </Router>
  );
}

export default App;