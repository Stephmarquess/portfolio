import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logoSM.png'
import './header.css';

const Header = () => {
    return (     

  <navbar className="navbar navbar-expand-lg" data-bs-theme="dark">    
      <div className='container-fluid'>
      <a className="navbar-brand" href='/'>
        <img src={logo} className='logo navbar-brand' /> Stéfany Marques
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#links" aria-controls="links" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>    
    <div className="collapse navbar-collapse float-end" id="links">    
    <div className="navbar-nav ml-auto mb-2 mb-lg-0 text-center">    
    <a><Link to="/">Home</Link></a>
    <a><Link to="Sobre">Sobre Mim</Link></a>
    <a><Link to="Projetos">Projetos</Link></a>
    </div>
    </div>
    </div>
  </navbar>

    );
}

export default Header;
