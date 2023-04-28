import React from 'react'
import { useEmail } from '../../../context/emailContext'
import MailCard from '../../layout/mailCard/MailCard'

const Spam = () => {

    const { allMails } = useEmail()

    const spamEmails = allMails.filter(obj => obj.isSpam)

    return (
        <div className='all-mails'>
            <h1>Spam</h1>
            {
                spamEmails.length ? spamEmails.map((mail) => (
                    <MailCard key={mail.mId} mail={mail} />
                )) :
                    <p className='bg-text-light'>nothing in the Spam</p>
            }
        </div>
    )
}

export default Spam