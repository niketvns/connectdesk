import React from 'react'
import { NavLink } from 'react-router-dom'
import './sidebar.css'
import { AiOutlineInbox } from 'react-icons/ai'
import { RiSpam2Line } from 'react-icons/ri'
import { BsTrash } from 'react-icons/bs'
import { useEmail } from '../../../context/emailContext'

const Sidebar = () => {

    const { allMails, isSidebarOpen, toggleSidebar } = useEmail()

    const trashEmails = allMails.filter(obj => obj.isTrash)
    const inbox = allMails.filter(mail => !mail.isTrash && !mail.isSpam)
    const spamEmails = allMails.filter(obj => obj.isSpam)

    return (
        <div className={`sidebar-main ${isSidebarOpen ? 'show-sidebar-main' : null}`} >
            <NavLink to='/' onClick={() => toggleSidebar()}> <AiOutlineInbox /> Inbox({inbox.length})</NavLink>
            <NavLink to='/spam' onClick={() => toggleSidebar()}> <RiSpam2Line /> Spam({spamEmails.length})</NavLink>
            <NavLink to='/trash' onClick={() => toggleSidebar()}> <BsTrash /> Trash({trashEmails.length})</NavLink>
        </div >
    )
}

export default Sidebar