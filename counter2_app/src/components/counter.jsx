//props includes data that we give to a component
//props can not be changed

//state includes data that is local or private to that component

//once the state is set, it cannot be changed by other component

//we make it controlled component so it is entirely controlled by parent

import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value
  //   };

  //   handleIncrement = () => {
  //     this.setState({ value: this.state.value + 1 });
  //   };

  //   componentDidUpdate(prevProps, prevState) {
  //     console.log("Prev Props", prevProps);
  //     console.log("Prev State", prevState);
  //   }

  componentWillUnmount() {
    console.log("counter-Unmount");
  }

  render() {
    console.log("Counter render");
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          {" "}
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? true : false}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm "
          >
            Delete
          </button>
        </div>
        {/* //  <h4>{this.props.children}</h4> */}

        {/* <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>

        <button
          onClick={() => this.props.onDeccrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
