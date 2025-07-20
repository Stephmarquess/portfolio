import React from 'react';

const Button = ({urlRepositorio}) => {
    
    return (
        <a href={urlRepositorio}><button className="btn btn-dark">
        <i className="bi bi-github"></i> Repositório
      </button>
      </a>
    );
}

const BtnDeploy = ({urlDeploy}) => {
    
  return (
      <a href={urlDeploy} target='_blank'><button className="btn btn-dark">
      Deploy
    </button>
      </a>
      
  );
}

export {Button , BtnDeploy};
