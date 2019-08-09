//first all the child components are rendered and than the parent is mounted

import React, { Component } from "react";
import logo from "./logo.svg";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App-Constructor");
    this.state = {
      counters: [
        { id: 1, value: 3 },
        { id: 2, value: 8 },
        { id: 3, value: 11 },
        { id: 4, value: 5 }
      ]
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Prev Props", prevProps);
    console.log("Prev State", prevState);
  }

  componentDidMount() {
    console.log("App-Mounted");
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log("App-Render");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
