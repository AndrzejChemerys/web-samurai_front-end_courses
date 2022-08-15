import React, { Component } from "react";
import "./App.css";
import "./AddTask.css";

class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: "2022-11-12",
  };
  render() {
    return (
      <div className="form">
        <input type="text" placeholder="add task" value={this.state.text} />
        <input type="checkbox" checked={this.state.checked} id="important" />
        <label htmlFor="important">Priority</label>
        <br />
        <label htmlFor="date">TO be done by:</label>
        <input type="date" value={this.state.date} min="2022-08-15" max="2024-08-15" />
        <br />
        <button>Add Task</button>
      </div>
    );
  }
}

export default AddTask;
