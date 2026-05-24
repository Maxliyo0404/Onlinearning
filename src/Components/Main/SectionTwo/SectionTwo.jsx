import { useTranslation } from "react-i18next";
import "./SectionTwo.css";
import React from 'react'

function SectionTwo() {
    const [t, i18n] = useTranslation();
  return (
    <div className="sectionTwo">
        <div className="container">
            <div className="sectionTwo-wrapper">
                <h2 className="two-title">{t("sectionTwo.two-title")}</h2>
                <p className="two-text">{t("sectionTwo.two-title")}</p>
                <ul className="two-list">
                    <li className="two-item">
                        <img className="two-list" src={} alt="rasm" />
                        <h3 className="twoList-title">{t("sectionTwo.twoList-title1")}</h3>
                        <p className="twoList-text">{t("sectionTwo.twoList-text")}</p>
                    </li>
                    <li className="two-item">
                        <img className="two-list" src={} alt="rasm" />
                        <h3 className="twoList-title">{t("sectionTwo.twoList-title2")}</h3>
                        <p className="twoList-text">{t("sectionTwo.twoList-text")}</p>
                    </li>
                    <li className="two-item">
                        <img className="two-list" src={} alt="rasm" />
                        <h3 className="twoList-title">{t("sectionTwo.twoList-title3")}</h3>
                        <p className="twoList-text">{t("sectionTwo.twoList-text")}</p>
                    </li>
                    <li className="two-item">
                        <img className="two-list" src={} alt="rasm" />
                        <h3 className="twoList-title">{t("sectionTwo.twoList-title3")}</h3>
                        <p className="twoList-text">{t("sectionTwo.twoList-text")}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo