import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About/About';
import Contact from './Pages/Contact/Contact/Contact';
import Dentist from './Pages/Dentist/Denitst/Dentist';
import Footer from './Pages/Home/Footer/Footer.jsx';
import Header from './Pages/Home/Header/Header.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import NotFound from './Pages/NotFound/NotFound';
import Service from './Pages/Services/Service/Service';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/dentist' element={<Dentist />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
