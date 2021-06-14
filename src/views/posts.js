import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Translation } from "react-i18next";

const Post = (props) => (
  <Link to={"/posty/" + props.post._id}>
    <div className="single-post">
      <div className="single">
        <Translation>
          {(t) => <h3 className="title">{t(props.post.title)}</h3>}
        </Translation>
      </div>
    </div>
  </Link>
);

export default class posts extends Component {
  constructor(props) {
    super(props);

    this.state = { posts: [] };
  }
  componentDidMount() {
    axios
      .get("https://warhammer-universe-server.herokuapp.com/posts")
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  postList() {
    return this.state.posts.map((currentpost) => {
      return (
        <>
          <Post post={currentpost} key={currentpost._id} />
        </>
      );
    });
  }
  render() {
    return (
      <>
        <div className="context-container">
          <div className="context-box">
            <Translation>{(t) => <h2>{t("Posty")}</h2>}</Translation>
            {this.postList()}
          </div>
        </div>
      </>
    );
  }
}
