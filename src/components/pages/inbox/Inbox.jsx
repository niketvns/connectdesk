import React from 'react'
import MailCard from '../../layout/mailCard/MailCard'
import { useEmail } from '../../../context/emailContext'
import './inbox.css'

const Inbox = () => {

    const { allMails } = useEmail()

    const inbox = allMails.filter(mail => !mail.isTrash && !mail.isSpam)

    return (
        <div className='all-mails'>
            <h1>Inbox</h1>
            {
                inbox.length ? inbox.map((mail) => (
                    <MailCard key={mail.mId} mail={mail} />
                )) :
                    <p className="bg-text-light">
                        Nothing in the inbox
                    </p>
            }
        </div>
    )
}

export default Inbox