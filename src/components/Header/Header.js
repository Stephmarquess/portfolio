import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logoSM.png'
import './header.css';

const Header = () => {
    return (     

  <navbar className="navbar border-body" data-bs-theme="dark">
    <div >
      <span className="navbar-brand" href="#">
        <img src={logo} className='logo' /> Stéfany Marques
      </span>
    </div>
    <Link to="/">Home</Link>
    <Link to="Sobre">Sobre Mim</Link>
    <Link to="Projetos">Projetos</Link>
  </navbar>

    );
}

export default Header;
