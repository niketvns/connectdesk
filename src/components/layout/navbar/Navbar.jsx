import React from 'react'
import './navbar.css'
import { AiOutlineMail } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import { useEmail } from '../../../context/emailContext'

const Navbar = () => {
    const { toggleSidebar } = useEmail()
    return (
        <nav>
            <div className="nav-menu" onClick={() => toggleSidebar()}><FiMenu /></div>
            <div className='logo'><AiOutlineMail /> Connectdesk</div>
        </nav>
    )
}

export default Navbar