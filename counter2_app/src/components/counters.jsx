//when we want to pass the props from between
//the tags, we use children.props

//re render when state changes

import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       counters: [
  //         { id: 1, value: 3 },
  //         { id: 2, value: 8 },
  //         { id: 3, value: 11 },
  //         { id: 4, value: 5 }
  //       ]
  //     };
  //   }

  //   handleDelete = counterId => {
  //     const counters = this.state.counters.filter(c => c.id !== counterId);
  //     this.setState({ counters });
  //   };

  //   handleIncrement = counter => {
  //     const counters = [...this.state.counters];
  //     const index = counters.indexOf(counter);
  //     counters[index] = [...counter];
  //     counters[index].value++;
  //     console.log(this.state.counters[index]);
  //   };

  //   handleReset = () => {
  //     const counters = this.state.counters.map(c => {
  //       c.value = 0;
  //       return c;
  //     });
  //     this.setState({ counters });
  //   };

  //if we want to get the stuff by structuring with a new name
  //   simply do this:

  //   Realname:DesiredName

  render() {
    console.log("Counters Render");
    const {
      onReset: Reset,
      onDelete,
      onIncrement,
      onDecrement,
      counters
    } = this.props;
    return (
      <div>
        <button
          // onClick={this.handleReset}
          onClick={Reset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            // key={counter.id}
            // onDelete={this.handleDelete}
            // onIncrement={this.handleIncrement}
            // counter={counter}

            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          >
            {/* {/* <h3> Counter #{counter.id} </h3> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
