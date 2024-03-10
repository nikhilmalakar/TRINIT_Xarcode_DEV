import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";

import CourseGrid from "./components/CourseGrid";

import TutorDashBoard from "./pages/TutorDashboard";
import TutorCourses from "./pages/TutorCourses";
import Courses from "./scenes/courses";
import TutorTeam from "./pages/TutorTeam";
import TutorContacts from "./pages/TutorContacts.jsx";
import TutorInvoices from "./pages/TutorInvoices";
import TutorForm from "./pages/TutorForm";
import TutorFaq from "./pages/TutorFaq";
import StudentDashBoard from "./pages/StudentDashboard.jsx";
import StudentCourses from "./pages/StudentCourses.jsx";
import StudentTeam from "./pages/StudentTeam.jsx";
import StudentContacts from "./pages/StudentContacts.jsx";
import StudentInvoices from "./pages/StudentInvoices.jsx";
import StudentFaq from "./pages/StudentFaq.jsx";
import StudentForm from "./pages/StudentForm.jsx";
import OneToOne from "./components/stream/OneToOne.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/courses" element={<CourseGrid />}></Route>
        {/* <Route path="/calender" element={<CourseGrid />}></Route> */}
        <Route path="/tutordash" element={<TutorDashBoard />} />
        <Route path="/tutordash/courses" element={<TutorCourses />} />
        <Route path="/tutordash/team" element={<TutorTeam />} />
        <Route path="/tutordash/contacts" element={<TutorContacts />} />
        <Route path="/tutordash/invoices" element={<TutorInvoices />} />
        <Route path="/tutordash/form" element={<TutorForm />} />
        <Route path="/tutordash/faq" element={<TutorFaq />} />
        <Route path="/studentdash" element={<StudentDashBoard />} />
        <Route path="/studentdash/courses" element={<StudentCourses />} />
        <Route path="/studentdash/team" element={<StudentTeam />} />
        <Route path="/studentdash/contacts" element={<StudentContacts />} />
        <Route path="/studentdash/invoices" element={<StudentInvoices />} />
        <Route path="/studentdash/form" element={<StudentForm />} />
        <Route path="/studentdash/faq" element={<StudentFaq />} />
        <Route path="/onetoone" element={<OneToOne />} />
        {/* <Route path="/onetoone" element={<OneToOne />} /> */}

      </Routes>
    </BrowserRouter>
  );
};

export default App;
