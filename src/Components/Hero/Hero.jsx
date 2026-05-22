import { useTranslation } from "react-i18next";
import "./Hero.css";
import React from 'react'

function Hero() {
    const [t, i18n] = useTranslation();
  return (
    <div className="hero">
        <div className="container">
            <div className="hero-wrapper">
                <div className="hero-info">
                    <h1 className="">{t("hero.hero-title")}</h1>
                    <p className="">{t("hero.hero-text")}</p>
                    <button className="hero-btn">{t("hero.hero-btn")}</button>
                </div>
                <div className="hero-cards">
                    <div className="hero-card">
                        <div className="hero-icon"></div>
                        <h4></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero