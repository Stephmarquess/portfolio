import {Outlet} from 'react-router-dom';
import './assets/css/App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className='container'>
    <Header />
    <Outlet />
    <Footer />
    </div>
  );
}

export default App;
