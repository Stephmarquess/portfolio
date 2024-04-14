import React from 'react';
import '../../pages/Home/home.css';
import '../../pages/Sobre/sobre.css';
import js from '../../assets/icons/js.png';
import boot from '../../assets/icons/bootstrap.webp';
import html from '../../assets/icons/html.png';
import css from '../../assets/icons/css-3.png';
import java from '../../assets/icons/java.png';

const Sobre = () => {
  return (
    <section id="habilidades-prof" className='mt-5'>
      <strong><p className='fs-2 text-center' style={{ color: "#ff5757" }}>Sobre mim</p></strong>
      <p> Sou Stéfany Marques, tenho 27 anos e moro em Juazeiro do Norte - Ceará, Brasil. Sou psicóloga formada pelo Centro Universitário Dr. Leão Sampaio - UNILEÃO e Programadora Full Stack formada pela RECODE.<br />
        Desde pequena fui introduzida aos vídeos games e computação e desde então me tornei apaixonada por tecnologia. Amante da natureza, música, livros e desafios. Adoro estar sempre estudando e descobrindo
        coisas novas, busco explorar ao máximo tudo aquilo que me proponho a fazer.<br />  </p>

      <strong><p className='fs-3'>Objetivos</p></strong>
      <p> Fornecer soluções em tecnologia e a longo prazo contribuir para o conhecimento na área.</p>

      <strong><p className='fs-3'>Pilares</p></strong>
      <div className="cards-pilares">
        <div className="card-pilares"> Comunicação </div>
        <div className="card-pilares"> Grupo </div>
        <div className="card-pilares"> Honestidade </div>
        <div className="card-pilares"> Adaptabilidade </div>
      </div>
      
      <p> Tenho esses 04 campos como pilares para a minha jornada pessoal e profissional. 
          Acredito que valorizar a comunicação, trabalho em grupo, praticar a honestidade e saber nos adaptar são fundamentais para o crescimento pessoal e profissional no mundo de hoje.

      </p>



    </section>
  );
}

export default Sobre;
