import "./About.css"
import Hole from "../../ui/Hole"
import {skills} from "../../data";
import CardUi from "../../assets/CardUi"
const About = () => {
  return (
    <section id="about" >
      <div className="card section__wrapper">
      <Hole />
      <div className="column left-column">
        <h3 className="skill__title">My Skills</h3>
        <div className="skills__container">
          {skills.map((skill, index) =>(   
            <div className="flex skill__group"  key={index} >
             {skill.data.map((list, key) => (
            <div className="blur__overlay flex__center skill" key={key} >
              <div className="skill__logo">
                <img src={list.logo} />
              </div>
            </div>

             ))}
            </div>
          ) )}
        </div>
        <CardUi className="card__ui-item" color={"var(--color-primary)"} />
      </div>
      <div className="column">
        <h2 className="shine">About Me</h2>
        <h1 className="title">
          I am <span className="color__primary">Gyampoh Samson</span>
        </h1>
        <p className="text__muted description">
          Experienced Full Stack Developer with a passion for crafting dynamic, user-friendly, and
           responsive web interfaces. Proficient in modern frontend technologies, frameworks, and
            design principles.  Adopt at transforming ideas into reality seamless user experience with clean,
            efficient, and scalable code. Strong attention to details, problem solving skills, and a
            proven record of delivering stunning user experience and high quality projects to the table.
        </p>
      </div>
      </div>
    </section>
  )
}

export default About