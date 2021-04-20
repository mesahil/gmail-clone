import React from 'react'
import './emailRow.css'
import { Checkbox, IconButton } from '@material-ui/core'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router';
import { selectMail } from './features/mailSlice';
import { useDispatch } from 'react-redux';
function EmailRow({id, title, subject,description, time}) {
    const history= useHistory();
    const dispatch = useDispatch()
    const openMail = () =>{
        dispatch(selectMail({
            id, title, subject,description, time
        }))
        history.push('/mail')
    }
    return (
        <div onClick={openMail} className='emailRow'>
            <div className='emailRow-option'>
                <Checkbox/>
                <IconButton>
                    <StarOutlineIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantIcon/>
                </IconButton>
            </div>
            <div className='emailRow-title'>
                <h3>{title}</h3>
            </div>
            <div className='emailRow-message'>
                <h4>{subject} {" "} 
                    <span className='emailRow-description'>-{description}</span>
                </h4>
            </div>
            <p className='emailRow-time'>
                {time}
            </p>
        </div>
    )
}

export default EmailRow
