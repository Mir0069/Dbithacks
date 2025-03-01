import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Apply from './components/Apply';
import My_profile from './components/My_profile';
import Settings from './components/Settings';
function App() {
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

        
      </Routes>
      <footer className="bg-gradient-to-r from-black to-gray-900 text-center py-4">
        <div className="container mx-auto">
          <p className="text-gray-400">BuildAid © 2025</p>
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