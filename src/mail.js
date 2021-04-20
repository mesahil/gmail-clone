import { IconButton } from '@material-ui/core'
import React from 'react'
import './mail.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';


function Mail() {
    const history= useHistory();
    const selectedMail = useSelector(selectOpenMail)
    return (
        <div className='mail'>
            <div className='mail-tools'>
                <div className='mail-toolsLeft'>
                    <IconButton onClick={()=> history.push('/')}>
                        <ArrowBackIcon/>
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon/>
                    </IconButton>
                    <IconButton>
                        <ErrorIcon/>
                    </IconButton>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton>
                        <EmailIcon/>
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon/>
                    </IconButton>
                    <IconButton>
                        <LabelImportantIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>

                </div>
                <div className='mail-toolsRight'>
                    <IconButton>
                        <UnfoldMoreIcon/>
                    </IconButton>
                    <IconButton>
                        <PrintIcon/>
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon/>
                    </IconButton>
                </div>

            </div>
            <div className='mail-body'>
                <div className='mail-bodyHeader'>
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportantIcon className='mail-important'/>
                    <p>{selectedMail?.title}</p>
                    <p className='mail-time'>{selectedMail?.time}</p>
                </div>
                <div className='mail-message'>
                    <p> {selectedMail?.description}</p>
                </div>

            </div>
        </div>
    )
}

export default Mail
