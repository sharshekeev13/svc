import React, { useState } from "react"; 
import { useTranslation } from "react-i18next"; 
import { Link, Events } from "react-scroll"; 
import "./styles/header.css"; 
import logo from "./imgHeader/logo.png"; 

const Header = () => { 
  const { t, i18n } = useTranslation(); 
  const [selectedLanguage, setSelectedLanguage] = useState("jp"); 
  const [activeLink, setActiveLink] = useState(""); 
 
  const changeLanguage = (lng) => { 
    i18n.changeLanguage(lng); 
    setSelectedLanguage(lng); 
  }; 
 
  const handleSetActive = (to) => { 
    setActiveLink(to); 
  }; 
 
  return ( 
    <header className="header"> 
      <div className="logo"> 
        <img 
          className="SNK" 
          width="170px" 
          src={logo} 
          alt="SNK Logo" 
        /> 
      </div> 
      <nav className="nav-menu"> 
        <ul> 
          <li className={activeLink === "top" ? "active" : ""}> 
            <Link 
              activeClass="active" 
              to="top" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={1000} 
              onSetActive={handleSetActive} 
            > 
              {t("header.menu.top")} 
            </Link> 
          </li> 
          <li className={activeLink === "character" ? "active" : ""}> 
            <Link 
              activeClass="active" 
              to="character" 
              spy={true} 
              smooth={true} 
              offset={-101} 
              duration={1000} 
              onSetActive={handleSetActive} 
            > 
              {t("header.menu.characters")} 
            </Link> 
          </li> 
          <li className={activeLink === "battleSystem" ? "active" : ""}> 
            <Link 
              activeClass="active" 
              to="battleSystem" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={1000} 
              onSetActive={handleSetActive} 
            > 
              {t("header.menu.battle_system")} 
            </Link> 
          </li> 
          <li className={activeLink === "OnlineBattle" ? "active" : ""}> 
            <Link 
              activeClass="active" 
              to="OnlineBattle" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={1000} 
              onSetActive={handleSetActive} 
            > 
              {t("header.menu.online_battle")} 
            </Link> 
          </li> 
          <li className={activeLink === "GalleryMode" ? "active" : ""}> 
            <Link 
              activeClass="active" 
              to="GalleryMode" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={1000} 
              onSetActive={handleSetActive} 
            > 
              {t("header.menu.gallery_mode")} 
            </Link> 
          </li> 
          <li className={activeLink === "Product" ? "active" : ""}> 
            <Link 
              activeClass="active" 
              to="Product" 
              spy={true} 
              smooth={true} 
              offset={-99} 
              duration={1000} 
              onSetActive={handleSetActive} 
            > 
              {t("header.menu.product")} 
            </Link> 
          </li> 
        </ul> 
      </nav> 
      <div className="language-selector"> 
        <button 
          onClick={() => changeLanguage("jp")} 
          className={`jp-button ${selectedLanguage === "jp" ? "active" : ""}`} 
        > 
          JP 
        </button> 
        <button 
          onClick={() => changeLanguage("eng")} 
          className={`eng-button ${selectedLanguage === "eng" ? "active" : ""}`} 
        > 
          ENG 
        </button> 
      </div> 
    </header> 
  ); 
}; 
 
export default Header;
