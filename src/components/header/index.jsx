import "./header.css"
import HeaderTitle from "../../ui/HeaderTitle";
import {profile} from  "../../assets";
import CodeBlock from "../../ui/CodeBlock";
import Facts from "../../ui/Facts";
import SocialHandles from "../../ui/SocialHandles";
import BreathCircle from "../../ui/BreathCircle"
const code = `
const developer = {
  firstName: "Samson",
  lastName: "Gyampoh",
  aka:"Gyampson",
  hobby:repeat = ({no excuses})=>{
   //code();
   //eat();
   //sleep();
   //repeat();
  }
 } 
 `;
const Header = () => {
 
  return (
    <header id="header">
      <BreathCircle />  {/* adds a breathing circle animation */}
      <div className="section__wrapper">
        <div className="grid upper">
       
        <div className="column">
        <HeaderTitle />
        </div>
        <div className="column">
           <img src={profile} alt="" className="profile__photo" /> 
        </div>
      </div>
      <div className=" card grid lower">
      <CodeBlock language ={"javascript"} code={code} />
      <div>
        <p className="text__muted description">
          I dissect intricate user experience challenges to engineer integrity-focused solutions that resonate with all users .
        </p>
       <Facts />
       <SocialHandles />
      </div>
      </div>
      </div>
    </header>
  )
}

export default Header