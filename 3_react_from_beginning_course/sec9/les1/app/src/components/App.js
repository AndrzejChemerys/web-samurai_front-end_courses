import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Play PUBG",
        date: "2022-10-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "Wolontariat",
        date: "2022-10-22",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "Make some money",
        date: "2022-10-30",
        important: true,
        active: false,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    console.log("delete w app component" + id);
    // const tasks = [...this.state.tasks];
    // console.log(tasks);
    // const index = tasks.findIndex((task) => task.id === id); //-1;
    // console.log(index);
    // const deleteTask = tasks.splice(index, 1);
    // console.log(deleteTask);

    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);

    console.log(tasks);

    this.setState({
      tasks: tasks,
    });
  };

  changeTaskStatus = (id) => {
    console.log("change w app component" + id);

    const tasks = Array.from(this.state.tasks);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
