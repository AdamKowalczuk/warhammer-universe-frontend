import React from "react";
import i18n from "./i18n";
import "../App.css";

export default function ChangeLanguage(props, { t }) {
  const changeLanguage = (lng) => {
    if (lng === "English") {
      i18n.changeLanguage("pl");
    } else {
      i18n.changeLanguage("en");
    }
    props.changeLanguage(lng);
  };
  return (
    <div
      className="change-language"
      onClick={() => changeLanguage(props.language)}
    >
      <h3>{props.language === "English" ? "PL" : "EN"}</h3>
    </div>
  );
}
