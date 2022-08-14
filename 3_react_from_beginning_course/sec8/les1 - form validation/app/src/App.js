import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    pass: "",
    accept: false,

    errors: {
      username: false,
      email: false,
      pass: false,
      accept: false,
    },
  };

  messages = {
    username_incorrect: "Name shopuld be longer than 10 and can't have spaces",
    email_incorrect: "There is no @ w emailu",
    password_incorrect: "Password should have 8 letters",
    accept_incorrect: "Not accepted",
  };

  handleChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;

    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value;
      // const checked = e.target.checked;
      this.setState({
        [name]: value,
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("It works!");
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user">
            Your name:
            <input
              type="text"
              id="user"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <span>
              {this.state.errors.username && <span>{this.messages.username_incorrect}</span>}
            </span>
          </label>

          <label htmlFor="email">
            Your email:
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <span>{this.state.errors.email && <span>{this.messages.email_incorrect}</span>}</span>
          </label>

          <label htmlFor="password">
            Your password:
            <input
              type="password"
              id="password"
              name="pass"
              value={this.state.pass}
              onChange={this.handleChange}
            />
            <span>{this.state.errors.pass && <span>{this.messages.password_incorrect}</span>}</span>
          </label>

          <label htmlFor="accept">
            <input
              type="checkbox"
              id="accept"
              name="accept"
              checked={this.state.accept}
              onChange={this.handleChange}
            />{" "}
            I accept everything
          </label>
          <span>{this.state.errors.accept && <span>{this.messages.accept_incorrect}</span>}</span>

          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default App;
