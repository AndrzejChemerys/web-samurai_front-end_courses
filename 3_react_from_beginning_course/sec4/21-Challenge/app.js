class Draw extends React.Component {
  state = {
    omens: ["1", "2", "3"],
    omen: null,
    value: "",
  };

  handleShowOption = () => {
    const index = Math.floor(Math.random() * this.state.omens.length);
    this.setState({
      omen: this.state.omens[index],
    });
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleAddOption = () => {
    if (this.state.value === "") return alert("Wpisz coś!");
    // const omens = [...this.state.omens];
    // omens.push(this.state.value);
    const omens = this.state.omens.concat(this.state.value);
    this.setState({
      omens,
    });
    alert(`Omen added. Omens: ${omens}`);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleShowOption}>Look at the omen</button>
        <br />
        <input type="text" value={this.state.value} onChange={this.handleInputChange} />
        <button onClick={this.handleAddOption}>Add Omen</button>
        {this.state.omen ? <h1>{this.state.omen}</h1> : null}
      </div>
    );
  }
}

ReactDOM.render(<Draw />, document.getElementById("root"));
