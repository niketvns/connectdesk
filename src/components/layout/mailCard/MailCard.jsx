import React from 'react'
import './mailCard.css'
import { AiFillStar } from 'react-icons/ai'
import { useEmail } from '../../../context/emailContext'
import { NavLink } from 'react-router-dom'

const MailCard = ({ mail }) => {

    const { mId, unread, isStarred, subject, content, isTrash, isSpam } = mail

    const { deleteMail, moveToSpam, markAsRead, markAsStared, moveToInbox, markAsUnread } = useEmail()

    return (
        <div className={`mail-card-main ${unread ? 'unread' : 'read'}`}>
            <div onClick={() => markAsStared(mId)} className={isStarred ? 'stared' : "star"}>
                <AiFillStar />
            </div>
            <h3>Subject: {subject}</h3>
            <p className='mail-content'>{content}</p>
            <div className="buttons">
                <div className="left" onClick={() => unread ? markAsRead(mId) : null}>
                    <NavLink to={`/email/details/${mId}`}>View Details</NavLink>
                </div>
                <div className="right">
                    <button className='delete' onClick={() => isTrash ? moveToInbox(mId) : deleteMail(mId)}>{isTrash ? 'Restore' : 'Delete'}</button>
                    <button className='mark-as-read' onClick={() => unread ? markAsRead(mId) : markAsUnread(mId)}>Mark as {unread ? 'Read' : 'Unread'}</button>
                    <button className='report-spam' onClick={() => isSpam ? moveToInbox(mId) : moveToSpam(mId)}>
                        {isSpam ? 'Move to Inbox' : 'Report Spam'}
                    </button>
                </div>
            </div>
        </div >
    )
}

export default MailCard