import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import History from "./views/history";
import Fractions from "./views/fractions";
import AddPost from "./views/addPost";
import Nav from "./views/nav";
import ExercisesList from "./views/posts";
import Details from "./views/details";

function App() {
  return (
    <Router>
      <Nav />
      <History />
      <Switch>
        <Route exact path="/historia">
          <History />
        </Route>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/posty/:id" component={Details} />
        {/* <Route path="/historia" exact component={History} /> */}
        <Route path="/frakcje" exact component={Fractions} />
        <Route path="/dodaj-post" component={AddPost} />
      </Switch>
      <footer>
        <h2>Copyright &copy; Warhammer Universe 2021</h2>
      </footer>
    </Router>
  );
}

export default App;
