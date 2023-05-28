import "./App.css";
import Button from "./components/Button";
import React from "react";

class App extends React.Component {
  state = {
    counter: 0,
    msg: "low",
    isDark: false,
  };

  handleIncrease = () => {
    const { counter } = this.state;
    if (counter < 5) {
      this.setState({
        counter: counter + 1,
        msg: "low",
      });
    } else if (counter >= 5 && counter < 10) {
      this.setState({
        counter: counter + 1,
        msg: "medium",
      });
    } else {
      this.setState({
        counter: counter + 1,
        msg: "high",
      });
    }
  };

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  changeTheme = () => {
    this.setState({
      ...this.state,
      isDark: !this.state.isDark,
    });
  };

  render() {
    const { counter, isDark, msg } = this.state;
    return (
      <div
        className={`h-screen text-white flex flex-col justify-center items-center ${
          isDark ? "bg-slate-900" : "bg-gray-300"
        }`}
      >
        <div>{msg}</div>
        <div className="w-24 flex gap-2 justify-center items-center">
          <Button title="+" onClick={this.handleIncrease} />
          <div>{counter}</div>
          <Button title="-" onClick={this.handleDecrease} />
        </div>
        <Button title={isDark ? "Dark" : "Light"} onClick={this.changeTheme} />
      </div>
    );
  }
}

export default App;
