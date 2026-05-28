import { useTranslation } from "react-i18next";
import "./Footer.css";
import React from 'react'

function Footer() {
    const [t, i18n] = useTranslation();
  return (
    <div className="footer">
        <div className="container">
            <div className="footer-wrapper">
                <ul className="footer-list">
                    <li className="footer-item"></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer