import React from 'react'
import TutorSignup from './TutorSignup'

export default function TutorSignupModal({setLogin, setSignup, onClose}) {
  return (
    <div className='flex justify-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
        <div className='mt-10 flex flex-col gap-5 text-white'>
            <button className='place-self-end' onClick={onClose}>X</button>
                <TutorSignup setLogin={setLogin} setSignup={setSignup}/>
        </div>
    </div>
  )
}
