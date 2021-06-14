import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";
import ChangeLanguageButton from "./i18.changeLanguage";
export default class nav extends Component {
  state = {
    language: "Polish",
  };
  changeLanguage(language) {
    if (language === "English") {
      this.setState({
        language: "Polish",
      });
    } else {
      this.setState({
        language: "English",
      });
    }
  }
  openNav() {
    let menuDisplay = document.getElementsByClassName("dropdown-menu")[0].id;

    if (menuDisplay === "open") {
      document.getElementsByClassName("dropdown-menu")[0].id = "close";

      document.getElementsByClassName("header-right")[0].style.display = "none";
    } else {
      document.getElementsByClassName("dropdown-menu")[0].id = "open";
      document.getElementsByClassName("header-right")[0].style.display =
        "block";
    }
  }
  render() {
    return (
      <>
        <nav>
          <div className="header">
            <div className="site-title">
              <Link to="/">
                <Translation>
                  {(t) => <h1>{t("Warhammer Universe")}</h1>}
                </Translation>
              </Link>
            </div>
            <div
              className="dropdown-menu"
              id="close"
              onClick={() => {
                this.openNav();
              }}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            <div className="header-right">
              <Link to="/historia">
                <Translation>{(t) => <h3>{t("Historia")}</h3>}</Translation>
              </Link>
              <Link to="/frakcje">
                <Translation>{(t) => <h3>{t("Frakcje")}</h3>}</Translation>
              </Link>
              <Link to="/">
                <Translation>{(t) => <h3>{t("Posty")}</h3>}</Translation>
              </Link>
              <Link to="/dodaj-post">
                <Translation>{(t) => <h3>{t("Dodaj post")}</h3>}</Translation>
              </Link>
              <ChangeLanguageButton
                language={this.state.language}
                changeLanguage={this.changeLanguage.bind(this)}
              />
            </div>
          </div>
        </nav>
      </>
    );
  }
}
