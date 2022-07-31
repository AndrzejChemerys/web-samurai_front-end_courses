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
  };

  currencies = [
    {
      id: 1,
      name: "dollar",
      ratio: 3.6,
      title: "Wartość w dolarach:",
    },
    {
      id: 2,
      name: "euro",
      ratio: 4.1,
      title: "Wartość w euro:",
    },
    {
      id: 3,
      name: "pound",
      ratio: 4.5,
      title: "Wartość w funtach:",
    },
  ];

  handleChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  render() {
    const amount = this.state.amount;

    const calculators = this.currencies.map((currency) => (
      <Cash
        key={currency.id}
        name={currency.name}
        title={currency.title}
        ratio={currency.ratio}
        cash={amount}
      />
    ));

    return (
      <div className="app">
        <label>
          <input type="number" value={this.state.amount} onChange={this.handleChange} />
        </label>
        {calculators}
      </div>
    );
  }
}

ReactDOM.render(<Exchange />, document.getElementById("root"));
