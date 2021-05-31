import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Post = (props) => (
  <Link to={"/posty/" + props.post._id}>
    <div className="single-post">
      <a className="single">
        <h3 className="title">{props.post.title}</h3>
        {/* <button>
        <Link to={"/posty/" + props.post._id}>Zobacz</Link>
      </button> */}
      </a>
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
            <h2>Posty</h2>
            {this.postList()}
          </div>
        </div>
      </>
    );
  }
}

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Exercise = (props) => (
//   <tr>
//     <td>{props.exercise.username}</td>
//     <td>{props.exercise.description}</td>
//     <td>{props.exercise.duration}</td>
//     <td>{props.exercise.date.substring(0, 10)}</td>
//     <td>
//       <Link to={"/edit/" + props.exercise._id}>edit</Link> |{" "}
//       <a
//         href="#"
//         onClick={() => {
//           props.deleteExercise(props.exercise._id);
//         }}
//       >
//         delete
//       </a>
//     </td>
//   </tr>
// );

// export default class ExercisesList extends Component {
//   constructor(props) {
//     super(props);

//     this.deleteExercise = this.deleteExercise.bind(this);

//     this.state = { exercises: [] };
//   }

//   componentDidMount() {
//     axios
//       .get("http://localhost:3000/exercises/")
//       .then((response) => {
//         this.setState({ exercises: response.data });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   deleteExercise(id) {
//     axios.delete("http://localhost:3000/exercises/" + id).then((response) => {
//       console.log(response.data);
//     });

//     this.setState({
//       exercises: this.state.exercises.filter((el) => el._id !== id),
//     });
//   }

//   exerciseList() {
//     return this.state.exercises.map((currentexercise) => {
//       return (
//         <Exercise
//           exercise={currentexercise}
//           deleteExercise={this.deleteExercise}
//           key={currentexercise._id}
//         />
//       );
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h3>Logged Exercises</h3>
//         <table className="table">
//           <thead className="thead-light">
//             <tr>
//               <th>Username</th>
//               <th>Description</th>
//               <th>Duration</th>
//               <th>Date</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>{this.exerciseList()}</tbody>
//         </table>
//       </div>
//     );
//   }
// }
