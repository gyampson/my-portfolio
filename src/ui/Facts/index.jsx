import "./Facts.css"
import { useState, useEffect } from "react"
import "Odometer/themes/Odometer-theme-default.css"
import Odometer from "react-odometerjs"
const Facts = () => {
    const [experience, setExperience] = useState(0);
    const [projects, setProjects] = useState(0);
    const [clients, setClients] = useState(0);
    useEffect (()=> {
      const timeoutId = setTimeout(() =>{
        setExperience(10);
        setProjects(150);
        setClients(2.5);
      }, 3000)

      return () => clearTimeout(timeoutId);
    },[] );
  return (
    <div className="flex__center fact__container">
     <div className="fact__item">
        <div className="flex__center">
            <Odometer value={experience} className="title" />
            <h3 className="title">+</h3>
        </div>
        <p className="label">Years Of Experience</p>
     </div>

     <div className="fact__item">
        <div className="flex__center">
            <Odometer value={projects} className="title" />
            <h3 className="title">+</h3>
        </div>
        <p className="label">Completed Projects</p>
     </div>

     <div className="fact__item">
        <div className="flex__center">
            <Odometer value={clients} className="title" />
            <h3 className="title">K</h3>
        </div>
        <p className="label">Completed Projects</p>
     </div>

    </div>
  )
}

export default Facts