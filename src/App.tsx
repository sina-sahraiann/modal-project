import { useState } from 'react'
import './App.css'
import Modal from './modal-component/Modal'
import BackDrop from './modal-component/backdrop-component/BackDrop'

function App() {
  const [modalOpen, setmodalOpen] = useState(false)

  const closeModal = () => {
    setmodalOpen(false)
  }

  const openHandler = () => {
    setmodalOpen(true)
  }

  return (
    <div className='relative'>
      <div className='fixed top-0 left-0 right-0 bg-slate-900 h-9 rounded-b-xl flex justify-between'>
        <button className=''></button>
      </div>
      <div className='mt-11'></div>
      <Modal showModal={modalOpen} closeModal={closeModal} >
        <h1>bruh</h1>
        <li className="p-4"></li>
        <li className="p-4"></li>
        <li className="p-4"></li>
        <li className="p-4"></li>
        <li className="p-4"></li>
      </Modal>
      <BackDrop show={modalOpen} />
      <button onClick={openHandler} className='border-0 bg-gray-800 text-white p-3 rounded-lg'>Open modal</button>
    </div>
  )
}

export default App
