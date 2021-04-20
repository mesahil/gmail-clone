import { Button, IconButton } from '@material-ui/core';
import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import './sidebar.css';
import './sidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import SidebarOption from './sidebarOption';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar() {
    const dispatch = useDispatch();
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large"/>} onClick={()=>dispatch(openSendMessage()) } className="compose">COMPOSE</Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={12} selected={true}/>
            <SidebarOption Icon={StarIcon} title="Starred" number={12}/>
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={12}/>
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={12}/>
            <SidebarOption Icon={NearMeIcon} title="Sent" number={12}/>
            <SidebarOption Icon={NoteIcon} title="Draft" number={12}/>
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={12}/>
            <div className="sidebar-footer">
                <div className="sidebar-footerIcon">
                    <IconButton>
                        <PersonIcon/>
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>
                </div>
            </div>

        </div>
    )
}

export default Sidebar