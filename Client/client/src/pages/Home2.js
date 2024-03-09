import React, {setState} from 'react'

import StudentLoginModal from '../components/register/StudentLoginModal';
import StudentSignupModal from '../components/register/StudentSignupModal';
import TutorLoginModal from '../components/register/TutorLoginModal';
import TutorSignupModal from '../components/register/TutorSignupModal';

const Home2 = () => {

    const [studentLoginModal, setStudentLoginModal] = React.useState(false);
    const [studentSignupModal, setStudentSignupModal] = React.useState(false);
    const [tutorLoginModal, setTutorLoginModal] = React.useState(false);
    const [tutorSigupModal, setTutorSignupModal] = React.useState(false);

    return (
      <div>
        <button onClick={() => setStudentLoginModal(true)}>Student Login</button>
        { studentLoginModal && <StudentLoginModal setLogin={() => setStudentLoginModal(false)} setSignup={ () => setStudentSignupModal(true)} onClose={ ()=> setStudentLoginModal(false)} />}
        {studentSignupModal && <StudentSignupModal setLogin={() => setStudentLoginModal(true)} setSignup={ () => setStudentSignupModal(false)} onClose={ ()=> setStudentSignupModal(false)} /> }

        <button onClick={() => setTutorLoginModal(true)}>Tutor Login</button>
        <button onClick={() => setTutorSignupModal(true)}>Tutor Signup</button>
        { tutorLoginModal && <TutorLoginModal setLogin={() => setTutorLoginModal(false)} setSignup={ () => setTutorSignupModal(true)} onClose={ ()=> setTutorLoginModal(false)} />}
        {tutorSigupModal && <TutorSignupModal setLogin={() => setTutorLoginModal(true)} setSignup={ () => setTutorSignupModal(false)} onClose={ ()=> setTutorSignupModal(false)}/> }
      </div>
    );
}

export default Home2
