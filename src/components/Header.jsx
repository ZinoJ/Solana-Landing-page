import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Header.css";
// import Radium, {StyleR} from "radium";

function Header({handleClick,click}) {
  // const [click, setClick] = useState(false)

  // const handleClick = () => setClick(!click)

  return (
    <div className="header">
      <div className="nav__container">
        <Link to="/">
          <img
            src="https://explorer.solana.com/static/media/dark-explorer-logo.2d910a55.svg"
            alt="Solana Logo"
            height="20px"
          />
        </Link>
        <div className="nav__right">
          <ul className={click ? 'navLists active' : 'navLists'}>
            <li>Cluster Stats</li>
            <li>Supply</li>
            <li>Inspector</li>
          </ul>
          <button className={click ? 'btn_active' : ''}>
            <FiCheckCircle className="navButton__icon" />{" "}
            <span>Mainneta Beta</span>
          </button>

          <div className="hamburger" onClick={handleClick}>{click ? (<FaTimes size={25} style={{ color: "aaa" }} />) : (<FaBars size={25} style={{ color: "aaa" }} />)}
            
          </div>
        </div>
      </div>
      {/* <hr className="hrActive"/> */}

      <hr className={click ? '' : 'hrActive'}/>
    </div>
  );
}

export default Header;
