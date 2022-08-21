import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

const Home = () => {
  // console.log("rendering..");
  return <h1>Starting page</h1>;
};
const News = () => <h1>News</h1>;
const Contact = () => <h1>Contact</h1>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <ul>
                {/* <li>
                  <a href="/">Start</a>
                </li>
                <li>
                  <a href="/news">News</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li> */}
                <li>
                  <Link to="/">Start</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/news" exact element={<News />} />
            <Route path="/contact" exact element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
