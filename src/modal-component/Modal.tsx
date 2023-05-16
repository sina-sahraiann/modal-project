import React, { useEffect, useRef } from 'react'
import './modal.css'

const Modal = ({ showModal, closeModal, children }: { showModal: boolean, closeModal(): void, children: React.ReactNode }) => {

    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.addEventListener('click', clickOutsideHandlert, true)
    }, [])

    function clickOutsideHandlert(this: Document, ev: any): void {
        if (!modalRef.current?.contains(ev.target)) {
            closeModal()
        }
    }

    const handleCloseButton: React.MouseEventHandler<HTMLButtonElement> = () => {
        closeModal()
    }
    const cssClasses = ['modal-body', showModal ? 'modal-show' : 'modal-hide',]


    return (
        <div ref={modalRef} className={cssClasses.join(' ')}>
            <button onClick={handleCloseButton} className='absolute right-2 text-base'> close</button>
            {children}

        </div>
    )
}

export default Modal