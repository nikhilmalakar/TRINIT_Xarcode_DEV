import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/register/Signup.js';
import LoginPage from './pages/register/Login.js';
import OneToOne from './pages/OneToOne.js';
import LiveStreaming from './pages/LiveStreaming.js'
import Notes from './pages/Notes.js'

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
     <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/onetoone" element={<OneToOne/>} />
            <Route path="/livestream" element={<LiveStreaming/>} />
            <Route path="/notes" element={<Notes/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;