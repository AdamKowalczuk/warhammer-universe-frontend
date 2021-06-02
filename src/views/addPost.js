import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Translation } from "react-i18next";
export default class addPost extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      description: "",
      author: "",
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://warhammer-universe-server.herokuapp.com/posts/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            // posts: response.data.map(
            //   (post) => (post.title, post.description, post.author)
            // ),
            // title: response.data[0].title,
            // description: response.data[1].description,
            // author: response.data[2].author,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }
  onChangeAuthor(e) {
    this.setState({
      author: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      description: this.state.description,
      author: this.state.author,
    };

    axios
      .post(
        "https://warhammer-universe-server.herokuapp.com/posts/dodaj-post",
        post
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }
  render() {
    return (
      <>
        <div className="context-container">
          <div className="add-box">
            <div className="create-blog content">
              <form onSubmit={this.onSubmit}>
                <label htmlFor="title">
                  <Translation>{(t) => <h3>{t("Tytuł")}</h3>}</Translation>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                />
                <label htmlFor="author">
                  <Translation>{(t) => <h3>{t("Autor")}</h3>}</Translation>
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  required
                  value={this.state.author}
                  onChange={this.onChangeAuthor}
                />
                <label htmlFor="body">
                  <Translation>{(t) => <h3>{t("Opis")}</h3>}</Translation>
                </label>
                <textarea
                  id="body"
                  name="body"
                  required
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                ></textarea>
                <button type="submit">
                  <Translation>
                    {(t) => <p style={{ color: "white" }}>{t("Dodaj")}</p>}
                  </Translation>
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
