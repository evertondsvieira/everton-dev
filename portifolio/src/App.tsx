import './App.css'
import './reset.css'
import { useState } from "react";
import Header from './components/Header'
import Dashboard from './components/dashboard'
import NavBar from './components/NavBar'
import Modal from 'react-modal'
Modal.setAppElement('#root')

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const customStyles = {
    content: {
      top: '-10px',
      right: '-10px',
      left: 'auto',
      bottom: '-10px',
      display: 'flex',
      alingItems: 'center',
      justifyContent: 'end',
      background: "#18181B"
    },
  };
 
  return (
    <div>
      <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Modal isOpen={isOpen} style={customStyles}>
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen}/>
      </Modal>
      <Dashboard />
    </div>
  )
}

export default App
