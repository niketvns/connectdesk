import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useEmail } from '../../../context/emailContext';
import { BsFillReplyFill } from 'react-icons/bs'
import { RiShareForwardFill } from 'react-icons/ri'
import { GrLinkPrevious } from 'react-icons/gr'
import './singleEmail.css'

const SingleEmail = () => {

    const { id } = useParams();
    const { allMails } = useEmail()
    let navigate = useNavigate();

    const mailDetails = allMails.find((mail) => mail.mId === id)

    return (
        mailDetails &&
        <div className='about-mail'>
            <button className='go-back' onClick={() => navigate(-1)}> <GrLinkPrevious /> Go Back</button>
            <h2>Subject: {mailDetails.subject}</h2>
            <p>{mailDetails.content}</p>
            <div className="buttons">
                <button> <BsFillReplyFill /> Reply</button>
                <button>Forword <RiShareForwardFill /> </button>
            </div>
        </div>

    )
}

export default SingleEmail