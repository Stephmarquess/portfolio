import { Routes, Route } from 'react-router-dom';
import '../src/App.css';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Projects from './pages/Projects/Projects.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;