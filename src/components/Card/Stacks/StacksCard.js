import js from '../../../assets/icons/js.png';
import boot from '../../../assets/icons/bootstrap-5-logo-icon.svg';
import html from '../../../assets/icons/html.png';
import css from '../../../assets/icons/css-3.png';
import java from '../../../assets/icons/java.png';
import react from '../../../assets/icons/react.png';
import mysql from '../../../assets/icons/mysql.png';
import git from '../../../assets/icons/git.png';
import spring from '../../../assets/icons/spring.png';

const SkillsCard = () => {
  const skills = [
    { icon: html, name: 'HTML' },
    { icon: css, name: 'CSS' },
    { icon: boot, name: 'Bootstrap', className: 'h-75' },
    { icon: js, name: 'JavaScript' },
    { icon: react, name: 'React' },
    { icon: git, name: 'Git' },
    { icon: java, name: 'Java' },
    { icon: spring, name: 'Spring' },
    { icon: mysql, name: 'MySQL' }
  ];

  return (
    <div className="grid-container mt-5 col">
      {skills.map((skill, index) => (
        <div key={index} className="card-habilidades">
          <img 
            src={skill.icon} 
            alt={skill.name}
            className={skill.className || ''}
            title={skill.name}
          />
        </div>
      ))}
    </div>
  );
};

export default SkillsCard; 