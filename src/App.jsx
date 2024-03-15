import './style/style.scss';
import Header from './Components/Header';
import Footer from './Components/Footer'
import Home from './Views/Home'
import Programmation from './Views/Programmation';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './Views/AboutUs';
import ArtisteSingle from './Views/ArtisteSingle';
import Billeterie from './Views/Billeterie';
import Contact from './Views/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programmation" element={<Programmation />} />
        <Route path="/a_propos" element={<AboutUs />} />
        <Route path="/billeterie" element={<Billeterie/>} />
        <Route path="/artiste/:id" element={<ArtisteSingle />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

