import React from 'react'
import { useEmail } from '../../../context/emailContext'
import MailCard from '../../layout/mailCard/MailCard'

const Trash = () => {
    const { allMails } = useEmail()

    const trashEmails = allMails.filter(obj => obj.isTrash)

    return (
        <div className='all-mails'>
            <h1>Trash</h1>
            {
                trashEmails.length ? trashEmails.map((mail) => (
                    <MailCard key={mail.mId} mail={mail} />
                )) :
                    <p className='bg-text-light'>nothing in the trash</p>
            }
        </div>
    )
}

export default Trash