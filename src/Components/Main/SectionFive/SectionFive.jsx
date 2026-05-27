import { useTranslation } from "react-i18next";
import "./SectionFive.css";
import React from 'react'
import { FaRegClock } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import five_img1 from "./image/five_img1.svg";
import five_img2 from "./image/five_img2.svg";
import five_img3 from "./image/five_img3.svg";
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
                            <img className="five-img" src={five_img1} alt="rasm" />
                            <span className="five-span">10 APR</span>
                        </div>
                        <div className="fiveList-titles">
                            <h3 className="fiveList-title">{t("sectionFive.fiveList-title1")}</h3>
                            <div className="fiveList-icons">
                                <div className="fiveList-icon">
                                    <div className="five-icon"><FaRegClock /></div>
                                    <p className="fiveList-text">{t("sectionFive.fiveList-text1")}</p>
                                </div>
                                <div className="fiveList-icon">
                                    <div className="five-icon"><CiLocationOn /></div>
                                    <p className="fiveList-text">{t("sectionFive.fiveList-text2")}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="five-item">
                        <div className="five-imgs">
                            <img className="five-img" src={five_img2} alt="rasm" />
                            <span className="five-span">10 APR</span>
                        </div>
                        <div className="fiveList-titles">
                            <h3 className="fiveList-title">{t("sectionFive.fiveList-title2")}</h3>
                            <div className="fiveList-icons">
                                <div className="fiveList-icon">
                                    <div className="five-icon"><FaRegClock /></div>
                                    <p className="fiveList-text">{t("sectionFive.fiveList-text1")}</p>
                                </div>
                                <div className="fiveList-icon">
                                    <div className="five-icon"><CiLocationOn /></div>
                                    <p className="fiveList-text">{t("sectionFive.fiveList-text2")}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="five-item">
                        <div className="five-imgs">
                            <img className="five-img" src={five_img3} alt="rasm" />
                            <span className="five-span">10 APR</span>
                        </div>
                        <div className="fiveList-titles">
                            <h3 className="fiveList-title">{t("sectionFive.fiveList-title3")}</h3>
                            <div className="fiveList-icons">
                                <div className="fiveList-icon">
                                    <div className="five-icon"><FaRegClock /></div>
                                    <p className="fiveList-text">{t("sectionFive.fiveList-text1")}</p>
                                </div>
                                <div className="fiveList-icon">
                                    <div className="five-icon"><CiLocationOn /></div>
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