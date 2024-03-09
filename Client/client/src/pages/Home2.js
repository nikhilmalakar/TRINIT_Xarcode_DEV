import React, {setState} from 'react'

import StudentLoginModal from '../components/register/StudentLoginModal';
import StudentSignupModal from '../components/register/StudentSignupModal';
import TutorLoginModal from '../components/register/TutorLoginModal';
import TutorSignupModal from '../components/register/TutorSignupModal';
import AddCourseModal from '../components/addCourse/AddCourseModal';

const Home2 = () => {

    const [studentLoginModal, setStudentLoginModal] = React.useState(false);
    const [studentSignupModal, setStudentSignupModal] = React.useState(false);
    const [tutorLoginModal, setTutorLoginModal] = React.useState(false);
    const [tutorSigupModal, setTutorSignupModal] = React.useState(false);

    const [addCourseModal, setAddCourseModal] = React.useState(false);

    return (
      <div>
        <button onClick={() => setStudentLoginModal(true)}>Student Login</button>
        { studentLoginModal && <StudentLoginModal setLogin={() => setStudentLoginModal(false)} setSignup={ () => setStudentSignupModal(true)} onClose={ ()=> setStudentLoginModal(false)} />}
        {studentSignupModal && <StudentSignupModal setLogin={() => setStudentLoginModal(true)} setSignup={ () => setStudentSignupModal(false)} onClose={ ()=> setStudentSignupModal(false)} /> }

        <button onClick={() => setTutorLoginModal(true)}>Tutor Login</button>
        <button onClick={() => setTutorSignupModal(true)}>Tutor Signup</button>
        { tutorLoginModal && <TutorLoginModal setLogin={() => setTutorLoginModal(false)} setSignup={ () => setTutorSignupModal(true)} onClose={ ()=> setTutorLoginModal(false)} />}
        {tutorSigupModal && <TutorSignupModal setLogin={() => setTutorLoginModal(true)} setSignup={ () => setTutorSignupModal(false)} onClose={ ()=> setTutorSignupModal(false)}/> }
      

        <button onClick={() => setAddCourseModal(true)}>Add Course</button>
        {addCourseModal && <AddCourseModal onClose={ ()=> setAddCourseModal(false)}/>}
      </div>
    );
}

export default Home2
