import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Mapcomp from './components/Mapcomp';
import Apply from './components/Apply';
import My_profile from './components/My_profile';
import Settings from './components/Settings';
import Login from './components/Login';
<<<<<<< HEAD

=======
>>>>>>> 8f521f7cf85881a0307f59cd6eb899991d0bafa7
import SignUp from './components/SignUp';
import EmployerDashboard from './components/EmployerDashboard';
import MyJobs from './components/Myjobs';

import { useState,useEffect } from 'react';

function App() {
  const [user, setUser] = useState({ token: null});

  // Retrieve token and userName from localStorage on app mount
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("userName");
    if (token) {
      setUser({ token, userName });
    }
  }, []);
  return (
    
    <>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard/" element={<Dashboard/>}/>
        <Route path="/apply" element={<Apply/>}/>
        <Route path="/my_profile" element={<My_profile/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path="/employerdashboard" element={<EmployerDashboard/>}/>
        <Route path='/myjobs' element={<MyJobs/>}/>

        
        <Route path='/login' element={<Login/>}/>
        
      </Routes>
      <Mapcomp></Mapcomp>
      <footer className="bg-gradient-to-r from-black to-gray-900 text-center py-4">
        <div className="container mx-auto">
          <p className="text-gray-400">Shramik © 2025</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="text-gray-400">Facebook</a>
            <a href="#" className="text-gray-400">Twitter</a>
            <a href="#" className="text-gray-400">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
    
  );
}

export default App;