// rcc
import React, { Component } from "react";
import UpdatedComponent from "./HigherOrderCom";

class Click extends Component {
  //con

  constructor(props) {
    super(props);

    //est
    this.state = {
      count: 0,
    };
  }
  UpdateClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.UpdateClick}>
          {this.props.name} {count} time
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(Click);
