import { useTranslation } from "react-i18next";
import "./SectionFive.css";
import React from 'react'

function SectionFive() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionFive">
        <div className="container">
            <div className="sectionFive-wrapper">
                <div className="five-titles">
                     <h2 className="five-title">{t("sectionFive.five-title")}</h2>
                    <p className="five-text">{t("sectionFive.five-text")}</p>
                </div>
                <ul className="five-list">
                    <li className="five-item">
                        <div className="five-imgs">
                            <img className="five-img" src={} alt="rasm" />
                            <span className="five-span">  10 APR</span>
                        </div>
                        <div className="fiveList-titles">
                            <h3 className="fiveList-title">{t("sectionFive.fiveList-title")}</h3>
                            <div className="fiveList-icons">
                                <div className="fiveList-icon">
                                    <div className="five-icon"></div>
                                    <p className="fiveList-text">{t("sectionFive.fiveList-text1")}</p>
                                </div>
                                <div className="fiveList-icon">
                                    <div className="five-icon"></div>
                                    <p className="fiveList-text">{t("sectionFive.fiveList-text2")}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SectionFive