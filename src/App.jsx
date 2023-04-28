import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Inbox, Spam, Trash, Error, Sidebar, Navbar, SingleEmail } from './components'


function App() {

  return (
    <>
      <Navbar />
      <div className='app-main'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Inbox />} />
          <Route path='/spam' element={<Spam />} />
          <Route path='/trash' element={<Trash />} />
          <Route path='/email/details/:id' element={<SingleEmail />} />
          <Route path='*' element={<Error />} />
        </Routes>

      </div>
    </>
  )
}

export default App;
