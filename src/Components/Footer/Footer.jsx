import { useTranslation } from "react-i18next";
import "./Footer.css";
import React from 'react'

function Footer() {
    const [t, i18n] = useTranslation();
  return (
    <div className="footer">
        <div className="container">
            <div className="footer-wrapper">
                <div className="footer-col">
                    <h3 className="footer-logo">{t("footer.footer-logo")}</h3>
                     <p className="footer-text">{t("footer.footer-text")}</p>
                     <div className="footer-icons">
                        <span className="footer-span">{t("footer.footer-span")}</span>
                        <div className="footer-piktos">
                            <div className="footer-pikto"></div>
                            <div className="footer-pikto"></div>
                            <div className="footer-pikto"></div>
                            <div className="footer-pikto"></div>
                        </div>
                     </div>
                </div>
                <div className="footer-col">
                   <h4 className="footer-title">{t("footer.footer-title")}</h4> 
                <ul className="footer-list">
                    <li><a className="footer-link" href="#"></a></li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer