const Dollars = (props) => (
  <div>Wartość w dolarach: {props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2)}</div>
);

const Euros = (props) => {
  const value = (props.cash / props.ratio).toFixed(2);
  return <div>Wartość w euros: {props.cash <= 0 ? "" : value}</div>;
};

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    ratioDollar: 3.6,
    ratioEuro: 4.0,
  };

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  render() {
    const { amount, ratioDollar, ratioEuro } = this.state;

    return (
      <div className="app">
        <label>
          <input type="number" value={this.state.amount} onChange={this.handleChange} />
        </label>
        <Dollars cash={amount} ratio={ratioDollar} />
        <Euros cash={amount} ratio={ratioEuro} />
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
