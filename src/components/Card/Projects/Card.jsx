import React from 'react';
import '../../../pages/Projects/projects.css';
import {Button, BtnDeploy} from '../../Button/Button.jsx';

const Card = ({img, nomeProjeto, descricao, urlRepositorio, urlDeploy}) => {
    return (
        <div className="card projetos mb-4" style={{ maxWidth: 900 }}>
        <div className="projetos row g-0">
          <div className="col p-3">
            <img src={img} className="img-fluid rounded-start" alt={nomeProjeto} />
          </div>
          <div className="col">
            <div className="card-body">
              <h5 className="card-title">{nomeProjeto}</h5>
              <p className="card-text">
                {descricao}
              </p>          
              <div className='text-center'>
              <p className="card-text">
                <Button urlRepositorio={urlRepositorio} />                
              </p>
              </div>
              {urlDeploy ? (
                <div className='text-center'>
                <p className="card-text mt-3">
                  <BtnDeploy urlDeploy={urlDeploy} />                
                </p>
                </div>
              ) : 
              <p> </p>
            }
            </div>
          </div>
        </div>
      </div>
      
    );
}

export default Card;
