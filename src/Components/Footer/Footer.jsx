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
                     </div>
                </div>
                <ul className="footer-list">
                    <li className="footer-item">
                        <h3></h3>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer