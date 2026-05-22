import "./Header.css";
import React from 'react'
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function Header() {
    const [t, i18n] = useTranslation();
     const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleChangeLanguage = (event) =>{
        i18n.changeLanguage(event.target.value)
    }
  return (
    <div className="header">
        <div className="container">
            <div className="header-wrapper">

            </div>
        </div>
    </div>
  )
}

export default Header