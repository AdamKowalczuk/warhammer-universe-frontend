import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
export default class nav extends Component {
  render() {
    return (
      <>
        <nav>
          <div className="header">
            <div className="site-title">
              <Link to="/historia">
                <h1>Warhammer Universe</h1>
              </Link>
            </div>
            <div className="header-right">
              <Link to="/historia">
                <h3>Historia</h3>
              </Link>
              <Link to="/frakcje">
                <h3>Frakcje</h3>
              </Link>
              <Link to="/">
                <h3>Posty</h3>
              </Link>
              <Link to="/dodaj-post">
                <h3>Dodaj post</h3>
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
