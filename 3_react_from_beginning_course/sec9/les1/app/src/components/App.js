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
    const tasks = [...this.state.tasks];
    console.log(tasks);
    const index = tasks.findIndex((task) => task.id === id); //-1;
    console.log(index);
    const deleteTask = tasks.splice(index, 1);
    console.log(deleteTask);

    this.setState({
      tasks: tasks,
    });
  };

  changeTaskStatus = (id) => {
    console.log("change w app component" + id);
  };

  render() {
    return (
      <div className="App">
        TODO APP
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
