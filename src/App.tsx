import { useState } from 'react'
import './App.css'
import Modal from './modal-component/Modal'
import BackDrop from './backdrop-component/BackDrop'
import { Transition } from 'react-transition-group'

function App() {
  const [modalOpen, setmodalOpen] = useState(false)
  const [transitionState, setTransitionState] = useState({
    showBlocked: false,
  })

  const toggleBlock: React.MouseEventHandler<HTMLButtonElement> = () => {
    setTransitionState({ ...transitionState, showBlocked: !transitionState.showBlocked })
  }

  const closeModal = () => {
    setmodalOpen(false)
  }

  const openHandler = () => {
    setmodalOpen(true)
  }

  return (
    <div className='relative'>
      <div className='fixed top-0 left-0 right-0 bg-slate-900 rounded-b-xl flex justify-between p-4 pb-5'>
        <button onClick={toggleBlock} className='text-white'> toggle block</button>
      </div>
      <div className='mt-14'></div>
      <Transition in={modalOpen} timeout={400} mountOnEnter unmountOnExit>
        {(state) => (
          <>
            <Modal showModal={state} closeModal={closeModal} >
              <h1>bruh</h1>
              <li className="p-4"></li>
              <li className="p-4"></li>
            </Modal>
            <BackDrop show={state} />
          </>
        )}
      </Transition>

      <Transition
        in={transitionState.showBlocked}
        timeout={1000}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <div className='h-24 w-24 bg-slate-800 mt-10 text-white transition-all '
            style={{
              opacity: state === 'exiting' ? 1 : 0,
            }}
          >{state}</div>
        )}
      </Transition>
      <button onClick={openHandler} className='border-0 bg-gray-800 text-white p-3 rounded-lg'>Open modal</button>

    </div>
  )
}

export default App
