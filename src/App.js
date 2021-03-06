import React, { Component } from "react";
import "./App.scss";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./containers/Home";
import Register from "./containers/Register";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/add"} component={Register} />
        </Switch>

        {/* <button onClick={() => this.props.updateName("mathias")} />
        {JSON.stringify(this.props.name)} */}
      </div>
    );
  }
}

export default App;
