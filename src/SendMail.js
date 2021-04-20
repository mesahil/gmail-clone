import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
import { useForm } from "react-hook-form";
import { closeSendMessage } from './features/mailSlice';
import { useDispatch } from 'react-redux';
import { db } from './firebase';
import firebase from "firebase";

function SendMail() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data)=>{
        db.collection('email').add(
            {
                to:data.to,
                subject:data.subject,
                message:data.message,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            }
        )
        dispatch(closeSendMessage());
    }
    const dispatch = useDispatch();
    
    return (
        <div className="sendMail">
            <div className='sendMail-header'>
                <h3>New Mail</h3>
                <CloseIcon onClick={()=>dispatch(closeSendMessage())} className="sendMail-close"/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='To' { ...register("to", { required:true })} type='email'/>
                {errors.to && <p className="sendMail-error">"To" is required</p> }
                <input placeholder='Subject' {...register ( "subject",{ required:true })} type='text'/>
                <input placeholder='Message' {...register ( "message",{ required:true })} className='sendMail-message' type='text'/>
                <div className='sendMail-options'>
                    <Button className="sendMail-send" varient="contained" color='primary' type='submit'>send</Button>
                </div>
            </form>
            
        </div>
    )
}

export default SendMail
