import React, { Component } from "react";
import { link } from "fs";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      para: "Hello G",
      tags: []
    };
  }
  renderTags = () => {
    if (this.state.tags.length === 0) return <p>There are no Tags</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  };

  someFunction = () => {
    this.setState({ count: ++this.state.count });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "Add some tags"}
        {this.renderTags()}
        {this.state.count}
        <button onClick={this.someFunction}>
          <h1>PRESS</h1>
        </button>
      </React.Fragment>
    );
  }
}
export default Counter;
