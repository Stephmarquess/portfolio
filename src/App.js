import {Outlet} from 'react-router-dom';
import '../../portfolio/src/assets/css/App.css';
import Footer from '../../portfolio/src/components/Footer/Footer';
import Header from '../../portfolio/src/components/Header/Header';

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
