import PortfolioPic from "../portfolio-pic.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import {AiOutlineGithub} from 'react-icons/ai';

export default function Home() {

  const size = {
    width: "30px"
  }
  return (

    <div className="intro">
        <h4>
          Hello <span>I am</span>
        </h4>
        <h1><b>Tamara Saadeh</b></h1>
        <h3 style={{color: "white", fontSize: "30px"}}>Software Engineer</h3>
        <br />
        <p style={{color: "white"}}>
          An emerging full-stack developer based in Dallas TX,<br />looking to
          integrate and grow my experience in the technological world
        </p>
        <br />
        <p style={{color: "white", fontSize: "20px"}}>Check out my</p>
        <div className="social-icons">
            <span>
              <a href="https://www.linkedin.com/in/tamara-saadeh-83483818b/" target="_blank">
                <span style={size}><FaLinkedinIn /></span>
              </a>
            </span>
            <span>
              <a href="https://github.com/tamara-703" target="_blank">
              <span style={size}><AiOutlineGithub /></span>
              </a>
            </span>
            </div>
        <img
          src= {PortfolioPic}
          alt="profile"
          width="400px"
        />
</div>

);
};
