const Cash = (props) => {
  const value = (props.cash / props.ratio).toFixed(2);
  return (
    <div>
      {props.title} {props.cash <= 0 ? "" : value}
    </div>
  );
};

class Exchange extends React.Component {
  state = {
    amount: "",
    ratioEuro: 4.0,
    ratioDollar: 3.5,
  };

  handleChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  render() {
    const { amount, ratioDollar, ratioEuro } = this.state;

    return (
      <div className="app">
        <label>
          <input type="number" value={this.state.amount} onChange={this.handleChange} />
        </label>
        <Cash cash={amount} ratio={ratioDollar} title="Dollar: " />
        <Cash cash={amount} ratio={ratioEuro} title="Euro:" />
      </div>
    );
  }
}

ReactDOM.render(<Exchange />, document.getElementById("root"));
