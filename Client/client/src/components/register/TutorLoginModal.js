import React from 'react'
import TutorLogin from './TutorLogin'

export default function TutorLoginModal({setLogin, setSignup, onClose}) {
  return (
    <div className='flex justify-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
        <div className='mt-10 flex flex-col gap-5 text-white'>
            <button className='place-self-end' onClick={onClose}>X</button>
            <div className='bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4'>
                <TutorLogin setLogin={setLogin} setSignup={setSignup} />
            </div>
        </div>
    </div>
  )
}
