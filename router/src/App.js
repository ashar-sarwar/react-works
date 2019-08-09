// alternative of exact keyword is switch component
// switch matches the route that matches and other routes are ignored

// in SPAs, when we navigate to another page , instead of reloading the entire page
// we should only update what we have in the content area

// Our bundle.js is downloaded when we load the application, this js file has all
// the components in it and we dont need to download it again and again, for that we use Link

// for passing props to a component, we use render attribute instead of component attribute

// specified or non-generic routes are placed first

// ? is a regular expression element for optional

// push will add new address in the browser history, so we can click the back button go
// back to where you were

// replace attribute replaces the current address so we dont have history

import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/admin/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route
              path="/products"
              render={props => <Products sortBy="newest" {...props} />}
            />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Redirect from="/messages" to="/posts" />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
