import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import Welcome from "./containers/Welcome";

const Posts = React.lazy(() => import("./containers/Posts"));
const User = React.lazy(() => import("./containers/User"));

class App extends Component {
  state = {
    showPosts: false,
  };

  modeHandler = () => {
    this.setState((prevState) => {
      return { showPosts: !prevState.showPosts };
    });
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <NavLink to="/user">User Page</NavLink> |&nbsp;
            <NavLink to="/posts">Posts Page</NavLink>
          </nav>
          <Route path="/" component={Welcome} exact />
          <Route
            path="/user"
            render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <User />
              </Suspense>
            )}
          />
          <Route
            path="/posts"
            render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <Posts />
              </Suspense>
            )}
          />
        </React.Fragment>
      </BrowserRouter>
      // <React.Fragment>
      //   <button onClick={this.modeHandler}>Toggle Mode</button>
      //   {this.state.showPosts ? (
      //     <Suspense fallback={<div>Loading...</div>}>
      //       <Posts />
      //     </Suspense>
      //   ) : (
      //     <User />
      //   )}
      // </React.Fragment>
    );
  }
}

export default App;
