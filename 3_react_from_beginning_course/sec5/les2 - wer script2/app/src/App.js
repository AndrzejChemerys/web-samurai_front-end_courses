import React, { Component } from "react";
import "./App.css";

// pseudo rosnąca baza danych

const data = [
  {
    id: 1,
    title: "Wiadomosc nr 1",
    body: "Zawartosc wiadomosci numer 1...",
  },
  {
    id: 2,
    title: "Wiadomosc nr 2",
    body: "Zawartosc wiadomosci numer 2...",
  },
];

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomosc numer ${index}`,
    body: `Zawartosc wiadomosci numer ${index} ...`,
  });
}, 5000);

class App extends Component {
  state = {
    comments: [...data],
  };

  getData = () => {
    console.log("aktualizacja");
    if (this.state.comments.length !== data.length) {
      this.setState({
        comments: [...data],
      });
    } else {
      console.log("dane takie same - nie aktualizuje");
    }
  };

  componentDidMount() {
    this.idI = setInterval(this.getData, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.idI);
  }

  render() {
    const comments = this.state.comments.map((comment) => (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <div>{comment.body}</div>
      </div>
    ));
    // console.log(comments);
    return <div className="App">{comments}</div>;
  }
}

export default App;
