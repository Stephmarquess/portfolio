import React from 'react';
import Card from '../../components/Card/Card';
import img1 from '../../assets/img/gotourViagens.png';
import img2 from '../../assets/img/meuPlano.png';
import img3 from '../../assets/img/portfolio.png';
import img4 from '../../assets/img/connecJob.png';
import img5 from '../../assets/img/margaretBiografia.png';


const Projetos = () => {

    return (
        <div className='mt-3 d-flex flex-column align-items-center efeito p-3'>
            <strong><p className='fs-2 text-center' style={{ color: "#ff5757" }}>Projetos</p></strong>
            <div id='botoes-carousel' className='d-flex gap-4 mt-5'>
                <button className='botao-carousel btn btn-danger' data-bs-target="#cards-projetos" data-bs-slide-to="0" > 1 </button>
                <button className='botao-carousel btn btn-danger' data-bs-target="#cards-projetos" data-bs-slide-to="1" > 2 </button>                
                </div>
            <div id="cards-projetos" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <div className='mt-3'>

                            <Card img={img3}
                                nomeProjeto='Portfolio - Stéfany Marques '
                                descricao='Desenvolvido com React, CSS, Bootstrap e JavaScript'
                                urlRepositorio='https://github.com/Stephmarquess/Plano-de-aula-Professor'
                                urlDeploy='https://github.com/Stephmarquess/portfolio' />

                            <Card img={img2}
                                nomeProjeto='Meu Plano de Ensino'
                                descricao='Desenvolvido com HTML, CSS, Bootstrap e JavaScript. Visa facilitar
    a geração do plano de aula de professores do Ensino Fundamental realizando buscas na API da Base
    Nacional Comum Curricular (BNCC), preenchimento automático de formulário e gerador de arquivo PDF.'
                                urlRepositorio='https://github.com/Stephmarquess/Plano-de-aula-Professor'
                                urlDeploy='https://meuplano.netlify.app/' />


                            <Card img={img4}
                                nomeProjeto='ConectJob - Plataforma de Capacitação e Vagas de Emprego'
                                descricao='Modelado em MVC com Java, utilizando Spring Boot, MySQL, HTML, CSS e Bootstrap. É uma plataforma de capacitação
    online para estudantes de baixa renda e acesso a oportunidades de emprego'
                                urlRepositorio='https://github.com/Squad12Rcd/Terceira-Entrega'
                                urlDeploy='https://connectjob-rcd.onrender.com/'
                            />

                            <Card img={img1}
                                nomeProjeto='GoTour - Agência de Viagens '
                                descricao='Desenvolvido em HTML, CSS, Bootstrap e JavaScript. Site de agência de viagens 
    com seções de "Destinos" e "Promoções"'
                                urlRepositorio='https://github.com/Stephmarquess/Agencia-de-viagens'
                                urlDeploy='https://gotourviagens.netlify.app/'
                            />
                        </div>

                    </div>
                    <div className="carousel-item mt-3">
                    <Card img={img5}
                                nomeProjeto='Site Biográfico - Margaret Hamilton'
                                descricao='Primeiro projeto Front-End desenvolvido em HTML, CSS, Bootstrap e JavaScript. Site biográfico sobre a 
    Engenheira de Software Margaret Hamilton.'
                                urlRepositorio='https://github.com/Stephmarquess/Womakers'
                                urlDeploy='https://stephmarquess.github.io/Womakers/'
                            />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>

            <div id='botoes-carousel' className='d-flex gap-4'>
                <button className='botao-carousel btn btn-danger' data-bs-target="#cards-projetos" data-bs-slide-to="0" > 1 </button>
                <button className='botao-carousel btn btn-danger' data-bs-target="#cards-projetos" data-bs-slide-to="1" > 2 </button>                
                </div>


        </div>
    );
}

export default Projetos;
