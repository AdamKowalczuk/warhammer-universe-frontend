import React, { Component } from "react";
import axios from "axios";

export default class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      author: "",
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://warhammer-universe-server.herokuapp.com/posts/" +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          title: response.data.title,
          description: response.data.description,
          author: response.data.author,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div class="context-container">
        <div class="details-box">
          <h2>{this.state.title}</h2>
          <h3 style={{ fontStyle: "italic", marginBottom: "0px" }}>
            {this.state.author}
          </h3>
          <p style={{ padding: "1vw 5vw" }}>{this.state.description}</p>
        </div>
      </div>
    );
  }
}
