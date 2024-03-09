import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import OneToOne from './pages/OneToOne.js';
import LiveStreaming from './pages/LiveStreaming.js';
import Notes from './pages/Notes.js';
import StudentLogin from './components/register/StudentLoginModal.js';
// import StudentSignup from './components/register/StudentSignup.js';
// import TutorLogin from './components/register/TutorLogin.js';
// import TutorSignup from './components/register/TutorSignup.js';
import Home2 from './pages/Home2.js';
import TopTutors from './components/TopTutors.js';



function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home2/>} />
            <Route path="/onetoone" element={<OneToOne/>} />
            <Route path="/livestream" element={<LiveStreaming/>} />
            <Route path="/notes" element={<Notes/>} />
            {/* <Route path="/student/signup" element={<StudentSignup />} /> */}
            <Route path="/student/login" element={<StudentLogin />} />
            <Route path="/top-tutor" element={<TopTutors />} />
            {/* <Route path="/tutor/signup" element={<TutorSignup />} /> */}
            {/* <Route path="/tutor/login" element={<TutorLogin />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;