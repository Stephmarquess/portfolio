import '../../assets/css/App.css';
import '../../pages/Home/home.css';
import avatar from '../../assets/img/avatar.jpeg';
import linkedin from '../../assets/icons/linkedin-color.png';
import gitHub from '../../assets/icons/gitHub.png';
import email from '../../assets/icons/gmail.png';
import SkillsCard from '../../components/Card/Stacks/StacksCard';

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
                <a href='https://www.linkedin.com/in/stefany-mmarques' target='_blank'><img src={linkedin} className='icons-contato' /></a>
                <a href='https://github.com/Stephmarquess' target='_blank' ><img src={gitHub} className='icons-contato' /></a>
              </div>
            </div>
            <SkillsCard />
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
