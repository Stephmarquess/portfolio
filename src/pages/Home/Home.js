import '../../assets/css/App.css';
import '../../pages/Home/home.css';
import avatar from '../../assets/img/avatar.jpeg';
import js from '../../assets/icons/js.png';
import boot from '../../assets/icons/bootstrap-5-logo-icon.svg';
import html from '../../assets/icons/html.png';
import css from '../../assets/icons/css-3.png';
import java from '../../assets/icons/java.png';
import react from '../../assets/icons/react.png';
import mysql from '../../assets/icons/mysql.png';
import linkedin from '../../assets/icons/linkedin-color.png';
import gitHub from '../../assets/icons/gitHub.png';
import email from '../../assets/icons/gmail.png';
import git from '../../assets/icons/git.png';
import spring from '../../assets/icons/spring.png';

const Home = () => {
  return (
    <main className="App mt-5 efeito p-3">
      <section className='infos apresentacao row '>
        <div id='apresentacao-texto' className='col'>
        <div className='col'>
          <p className='fs-2'>Olá! Sou <strong style={{ color: "#ff5757" }}>Stéfany Marques.</strong></p>

          Programadora Full Stack
          <div>
        <div id='icons-contato' className='mt-5 d-flex gap-3 justify-content-center col'>
        <a href='mailto:smouramkt@gmail.com'><img src={email} className='icons-contato' /></a>
        <a href='https://www.linkedin.com/in/st%C3%A9fany-marques/' target='_blank'><img src={linkedin}  className='icons-contato' /></a>
        <a href='https://github.com/Stephmarquess' target='_blank' ><img src={gitHub}  className='icons-contato' /></a>
        </div>
        </div>
        <div className="grid-container mt-5 col">          
            <div className="card-habilidades"><img src={html} /></div>
            <div className="card-habilidades"><img src={css} /></div>
            <div className="card-habilidades"><img src={boot} className='h-75' /></div>
            <div className="card-habilidades"><img src={js} /></div>
            <div className="card-habilidades"><img src={react} /></div>
            <div className="card-habilidades"><img src={git} /></div>
            <div className="card-habilidades"><img src={java} /></div>            
            <div className="card-habilidades"><img src={spring} /></div> 
            <div className="card-habilidades"><img src={mysql} /></div>             
          </div>
        </div>
        </div>
        <div className='col img-apresentacao'>
          <img id='img-avatar' src={avatar} />
        </div>

      </section>
    </main>
  );
}

export default Home;
