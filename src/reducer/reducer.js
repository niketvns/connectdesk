export const initialValue = {
    allMails: [],
    isSidebarOpen: false
}

export const reducerFunc = (state, action) => {
    switch (action.type) {
        case 'load-inbox':
            return { ...state, allMails: action.payload, spamEmails: state.allMails.filter(obj => obj.isSpam) }

        case 'move-to-spam':
            return { ...state, allMails: state.allMails.map(mail => mail.mId === action.payload ? { ...mail, isSpam: true, isTrash: false } : mail) }

        case 'move-to-trash':
            return { ...state, allMails: state.allMails.map(mail => mail.mId === action.payload ? { ...mail, isTrash: true, isSpam: false } : mail) }

        case 'move-to-inbox':
            return { ...state, allMails: state.allMails.map(mail => mail.mId === action.payload ? { ...mail, isTrash: false, isSpam: false } : mail) }

        case 'mark-as-read':
            return { ...state, allMails: state.allMails.map((obj) => obj.mId === action.payload ? { ...obj, unread: false } : obj) }

        case 'mark-as-unread':
            return { ...state, allMails: state.allMails.map((obj) => obj.mId === action.payload ? { ...obj, unread: true } : obj) }

        case 'mark-as-stared':
            return { ...state, allMails: state.allMails.map((obj) => obj.mId === action.payload ? { ...obj, isStarred: !obj.isStarred } : obj) }

        case 'toggle-sidebar':
            return { ...state, isSidebarOpen: !state.isSidebarOpen }

        default:
            return state;
    }
}