import React from 'react'
import './header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar , IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './firebase';
function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const signout = () =>{
        auth.signOut().then(()=>{
            dispatch(logout())

        })
    }
    return (
        <div className="header">
            <div className="header-left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-5-1.png" alt=""/>
                
            </div>
            <div className="header-middle">
                <SearchIcon/>
                <input placeholder="Search mail"/>
                <ArrowDropDownIcon className="header-inputCaret"/>

            </div>
            <div className="header-right">
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar onClick={signout} src={user?.photoUrl} style={{cursor:'pointer'}}/>
            </div>
        </div>
    )
}

export default Header
