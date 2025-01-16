import "./Footer.css"
import {menu} from "../../data"
import { Link } from "react-scroll"
import SocialHandles  from "../../ui/SocialHandles";
const Footer = () => {
  return (
    <footer>
   <div className="section__wrapper">
    <ul className=" flex__center nav">
      {menu.map((list,index) =>(
         <Link to={list.name.toLowerCase()} spy={true} className="nav__item" smooth={true} offset={-70} duration={500} key={index} activeClass="btn__shine">
         {list.name}
         </Link>
      ) )}
    </ul>
    <SocialHandles />
    <div className="copyright">
      <h3> Copyright &copy; All right reserved -| 2024 </h3>
      <p className="text__muted">Developed With Passion by Gyampoh Samson</p>
    </div>
    <div className="base__logo">
      <h1 className="full__name shine">Gyampoh Kwaku Samson</h1>
    </div>
   </div>
    </footer>
  )
}

export default Footer