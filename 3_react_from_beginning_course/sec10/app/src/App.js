import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, NavLink, Route, Routes } from "react-router-dom";

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
                  <NavLink
                    to="/"
                    exact
                    activeClassName="home_selected"
                    activeStyle={{
                      backgroundColor: "gray",
                      letterSpacing: "12px",
                    }}
                  >
                    Start
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/news" exact activeClassName="news_selected">
                    News
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" exact activeClassName="contact_selected">
                    Contact
                  </NavLink>
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
