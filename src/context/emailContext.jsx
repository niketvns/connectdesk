import { createContext, useContext, useState, useEffect, useReducer } from 'react'
import { initialValue, reducerFunc } from '../reducer/reducer'
import { mails } from '../db/mails'

const emailContext = createContext()

const EmailProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducerFunc, initialValue)

    useEffect(() => {
        dispatch({ type: 'load-inbox', payload: mails })
    }, [])


    const deleteMail = (mailId) => {
        dispatch({ type: 'move-to-trash', payload: mailId })
    }

    const moveToSpam = (mailId) => {
        dispatch({ type: 'move-to-spam', payload: mailId })
    }

    const moveToInbox = (mailId) => {
        dispatch({ type: 'move-to-inbox', payload: mailId })
    }

    const markAsStared = (mailId) => {
        dispatch({ type: 'mark-as-stared', payload: mailId })
    }

    const markAsRead = (mailId) => {
        dispatch({ type: 'mark-as-read', payload: mailId })
    }

    const markAsUnread = (mailId) => {
        dispatch({ type: 'mark-as-unread', payload: mailId })
    }

    const toggleSidebar = () => {
        dispatch({ type: 'toggle-sidebar' })
    }

    return (
        <emailContext.Provider value={{ allMails: state.allMails, deleteMail, moveToSpam, markAsStared, markAsRead, moveToInbox, isSidebarOpen: state.isSidebarOpen, toggleSidebar, markAsUnread }}>
            {children}
        </emailContext.Provider>
    )
}

const useEmail = () => useContext(emailContext)

export { EmailProvider, useEmail }