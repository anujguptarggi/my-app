import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    Counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  handelDelete = (counterId) => {
    console.log("event handler called", counterId);
  };
  render() {
    return (
      <div>
        {this.state.Counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handelDelete}
            value={counter.value}
            selected={true}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
