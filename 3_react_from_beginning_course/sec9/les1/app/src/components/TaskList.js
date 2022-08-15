import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  // const active = props.tasks.filter(task => task.active === true)
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);
  console.log(active, done);
  const activeTasks = active.map((task) => (
    <Task key={task.id} task={task} delete={props.delete} change={props.change} />
  ));
  const doneTasks = done.map((task) => (
    <Task key={task.id} task={task} delete={props.delete} change={props.change} />
  ));

  // const tasks = props.tasks.map((task) => (
  //   <Task key={task.id} task={task} delete={props.delete} change={props.change} />
  // ));

  return (
    <>
      <div className="active">
        <h1>Tasks to do:</h1>
        {activeTasks.length > 0 ? activeTasks : <p>No todos</p>}

        <hr />
        <div className="done">
          <h3>
            Tasks done <em>({done.length})</em>
          </h3>
          {/* {doneTasks} */}
          {/* showing just a few tasks: */}
          {done.length > 2 && <span style={{ fontSize: 10 }}>Showing only 2 last elements:</span>}
          {doneTasks.slice(0, 2)}
        </div>
      </div>
    </>
  );
};

export default TaskList;
