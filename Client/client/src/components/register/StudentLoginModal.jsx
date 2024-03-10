import React from 'react'
import StudentLogin from './StudentLogin.jsx'
export default function StudentLoginModal({onClose, setLogin, signup, setSignup}) {
  return (
    <div className='flex justify-center fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm'>
        <div className='mt-10 flex flex-col gap-5 text-white'>
            <button className='place-self-end' onClick={onClose}>X</button>
              <StudentLogin setLogin={setLogin} signup={signup} setSignup={setSignup} />
        </div>
    </div>
  )
}
