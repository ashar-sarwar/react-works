import React, { Component } from 'react';
import TodoList from './todoList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (<TodoList />);
  }
}

export default App;