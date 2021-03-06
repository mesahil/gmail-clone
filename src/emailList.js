import { Checkbox, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './emailList.css'
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from './Section'
import EmailRow from './emailRow';
import { db } from './firebase';

function EmailList() {
    const [mail, setMail]= useState([]);
    useEffect(() => {
        db.collection('email').orderBy('timestamp','desc').onSnapshot((snapshot)=> 
        setMail(snapshot.docs.map((doc) =>({
            id: doc.id,
            data: doc.data(),
        }))));
    },[]);
    return (
        <div className="emailList">
            <div className="emailList-setting">
                <div className='emailList-settingLeft'>
                    <IconButton>
                        <Checkbox/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>

                </div>
                <div className='emailList-settingRight'>
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
                <div className="emailList-sections">
                    <Section Icon={InboxIcon} title="Primary" color='red' selected/>
                    <Section Icon={PeopleIcon} title="Social" color='#1A73E8' />
                    <Section Icon={LocalOfferIcon} title="Promotions" color='green' />  
                    {console.log(mail)   }            
                </div>
                <div className="emailList-list">
                    {mail.map(({id, data:{to, subject, message, timestamp}}) => (
                        <EmailRow 
                            id={id}
                            title={to}
                            subject={subject}
                            description={message} 
                            time={new Date(timestamp?.seconds * 1000).toUTCString()}    
                        /> 
                    ))}
                    
                </div>
        </div>
    )
}

export default EmailList
