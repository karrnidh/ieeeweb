import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js'
import Titlebar from './components/Titlebar.js'
import Carousel from './components/Carousel.js'
import AboutUs from './components/AboutUs.js'
import ExecutiveCommittee from './components/Committee.js';
import Events from './components/Events.js';
import ContactPage from './components/ContactUs.js';
import './App.css'


function App() {
  return (
    <Router>
      <div>
        <Titlebar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Carousel/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/executivecommittee" element={<ExecutiveCommittee/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/contactus" element={<ContactPage/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App