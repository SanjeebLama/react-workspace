import React, { Component } from "react";

class AddProgram extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  incrementCount() {
    this.setState({ counter: this.state.counter + 1 });
  }
  decrementCount() {
    this.setState({ counter: this.state.counter - 1 });
  }
  resetCount() {
    this.setState({ counter: 0 });
  }
  render() {
    return (
      <div>
        <h1>This is Class based Component with State Example</h1>
        <h1>Number: {this.state.counter} </h1>
        <button onClick={() => this.incrementCount()}>
          Increment Button
        </button>{" "}
        <br />
        <button onClick={() => this.decrementCount()}>Decrement Button</button>
        <br />
        <button onClick={() => this.resetCount()}>Reset Button</button>
      </div>
    );
  }
}

export default AddProgram;
