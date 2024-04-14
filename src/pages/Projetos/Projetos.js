import React from 'react';
import Card from '../../components/Card/Card';
import img1 from '../../assets/img/gotourViagens.png';
import img2 from '../../assets/img/meuPlano.png';
import img3 from '../../assets/img/portfolio.png';
import img4 from '../../assets/img/connecJob.png';
import img5 from '../../assets/img/margaretBiografia.png';
import BtnDeploy from '../../components/Button/Button'
import js from '../../assets/icons/js.png';
import boot from '../../assets/icons/bootstrap-5-logo-icon.svg';
import html from '../../assets/icons/html.png';
import css from '../../assets/icons/css-3.png';
import java from '../../assets/icons/java.png';
import react from '../../assets/icons/react.png';
import mysql from '../../assets/icons/mysql.png';

const Projetos = () => {

    return (
        <div className='mt-3 d-flex flex-column align-items-center efeito p-3'>            
            <p className='fs-2  mt-3'> Projetos </p>
            <div className='mt-3'>
            
            <Card img={img3}
            nomeProjeto='Portfolio - Stéfany Marques ' 
            descricao='Desenvolvido com React, CSS, Bootstrap e JavaScript' 
            urlRepositorio='https://github.com/Stephmarquess/Plano-de-aula-Professor'
            urlDeploy='' />

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

            <Card img={img5} 
            nomeProjeto='Site Biográfico - Margaret Hamilton' 
            descricao='Primeiro projeto Front-End desenvolvido em HTML, CSS, Bootstrap e JavaScript. Site biográfico sobre a 
            Engenheira de Software Margaret Hamilton.' 
            urlRepositorio='https://github.com/Stephmarquess/Womakers'
            urlDeploy='https://stephmarquess.github.io/Womakers/'
            />                        

            </div>
        </div>
    );
}

export default Projetos;
