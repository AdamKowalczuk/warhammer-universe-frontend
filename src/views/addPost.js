import React, { Component } from "react";
import "../App.css";
import axios from "axios";
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
      .get("http://localhost:3001/posts/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            posts: response.data.map(
              (post) => (post.title, post.description, post.author)
            ),

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
      .post("http://localhost:3001/posts/dodaj-post", post)
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
                  <h3>Tytuł</h3>{" "}
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
                  <h3>Autor</h3>
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
                  <h3>Opis</h3>
                </label>
                <textarea
                  id="body"
                  name="body"
                  required
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                ></textarea>
                <button type="submit">
                  <p style={{ color: "white" }}>Dodaj</p>
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
