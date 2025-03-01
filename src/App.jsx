import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        


        
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