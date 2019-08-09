// when we use await in a function, we attach async keyword at the start of funct name

import React, { Component } from "react";
//import axios from "axios";
import httpRequest from "./services/httpService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "./config.json";
import "./App.css";

// axios.interceptors.response.use(null, error => {
//   const errorUnexpected = error.response;
//   if (!errorUnexpected) {
//     alert("unexpected bhund agya");
//   }

//   return Promise.reject(error);
// });

//const apiEndpoint = "http://jsonplaceholder.typicode.com/posts";
class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    //const response=await axios.get("http://jsonplaceholder.typicode.com/posts")  // it returns a promise
    const { data: posts } = await httpRequest.get(config.apiEndpoint);
    //console.log(response)
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const posts = [obj, ...this.state.posts];
    this.setState({ posts });
    const { data: post } = await httpRequest.post(config.apiEndpoint, obj);
  };

  handleUpdate = async post => {
    post.title = "Updated";

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
    const { data } = await httpRequest.put(
      `${config.apiEndpoint}/${post.id}`,
      post
    );
    console.log(data);
  };

  handleDelete = async post => {
    const originalPosts = [...this.state.posts];
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });
    try {
      await httpRequest.delete(`${config.apiEndpoint}/${post.id}`);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        alert("expected error");
      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
