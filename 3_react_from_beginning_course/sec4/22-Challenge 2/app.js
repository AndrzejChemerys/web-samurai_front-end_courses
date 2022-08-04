const Person = (props) => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={props.delete}>Delete</button>
    </li>
  );
};

class List extends React.Component {
  state = {
    people: [
      { id: 1, name: "James" },
      { id: 2, name: "Arthur" },
      { id: 3, name: "Julia" },
      { id: 4, name: "Andrii" },
    ],
  };

  // handleDelete = (id) => {
  //   // console.log(this, id);
  //   const people = [...this.state.people];
  //   const index = people.findIndex((person) => person.id === id);
  //   // console.log(index);
  //   // console.log(people);
  //   people.splice(index, 1);
  //   // console.log(people);
  //   this.setState({
  //     people,
  //   });
  // };

  handleDelete(name) {
    // let people = Array.from(this.state.people);
    let people = this.state.people.slice();
    console.log(name);
    people = people.filter((person) => name !== person.name);
    console.log(people);
    this.setState({
      people,
    });
  }

  render() {
    const people = this.state.people.map((person) => (
      <Person
        key={person.id}
        name={person.name}
        delete={this.handleDelete.bind(this, person.name)}
      />
    ));
    // const people = this.state.people.map((person) => (
    //   <Person key={person.id} name={person.name} delete={this.handleDelete.bind(this, person.id)} />
    // ));

    return <ul>{people}</ul>;
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
