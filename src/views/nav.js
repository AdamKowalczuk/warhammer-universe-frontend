import React, { Component } from "react";
import "../App.css";
export default class nav extends Component {
  render() {
    return (
      <>
        <nav>
          <div className="header">
            <div className="site-title">
              <a href="/">
                <h1>Warhammer Universe</h1>
              </a>
            </div>
            <div className="header-right">
              <a href="/historia">
                {" "}
                <h3>Historia</h3>{" "}
              </a>
              <a href="/frakcje">
                <h3>Frakcje</h3>
              </a>
              <a href="/">
                <h3>Posty</h3>
              </a>
              <a href="/dodaj-post">
                <h3>Dodaj post</h3>
              </a>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
