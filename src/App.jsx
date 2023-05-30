import "./App.css";
import Button from "./components/Button";
import React from "react";

class App extends React.Component {
  state = {
    monitor: [],
  };

  onClickedBtn = (btnTitle) => {
    this.setState({ monitor: this.state.monitor + btnTitle });
    console.log(this.state.monitor + btnTitle);
  };

  clrBtnOnClick = () => {
    this.setState({ monitor: "" });
  };

  delBtnOnClick = () => {
    this.setState({ monitor: this.state.monitor });
    console.log(this.state.monitor);
  };


  render() {
    return (
      <div className="h-screen bg-slate-900 text-white flex justify-center items-center">
        <div className="bg-slate-700 rounded shadow-lg h-[500px] w-[400px] flex flex-col justify-start items-center gap-2 p-8">
          <div
            className={`h-28 w-full bg-gray-800 text-white p-5 text-left outline-none rounded-md hover:outline-orange-500 `}
          >
            {this.state.monitor}
          </div>
          <div className="flex flex-row space-x-[23px] items-center pt-2">
            <Button
              title="("
              color="rgb(59 130 246)"
              onClick={this.onClickedBtn}
            />
            <Button
              title=")"
              color="rgb(59 130 246)"
              onClick={this.onClickedBtn}
            />
            <Button title="ANS" color="rgb(59 130 246)" />
            <Button
              title="DEL"
              color="rgb(59 130 246)"
              onClick={this.delBtnOnClick}
            />
            <Button
              title="CLR"
              color="rgb(59 130 246)"
              onClick={this.clrBtnOnClick}
            />
          </div>
          <div className="flex flex-row space-x-[23px] items-center pt-2">
            <Button title="7" onClick={this.onClickedBtn} />
            <Button title="8" onClick={this.onClickedBtn} />
            <Button title="9" onClick={this.onClickedBtn} />
            <Button
              title="rad"
              color="rgb(59 130 246)"
              onClick={this.onClickedBtn}
            />
            <Button
              title="%"
              color="rgb(59 130 246)"
              onClick={this.onClickedBtn}
            />
          </div>
          <div className="flex flex-row space-x-[23px] items-center pt-2">
            <Button title="4" onClick={this.onClickedBtn} />
            <Button title="5" onClick={this.onClickedBtn} />
            <Button title="6" onClick={this.onClickedBtn} />
            <Button
              title="*"
              color="rgb(59 130 246)"
              onClick={this.onClickedBtn}
            />
            <Button
              title="/"
              color="rgb(59 130 246)"
              onClick={this.onClickedBtn}
            />
          </div>
          <div className="flex flex-row space-x-[23px] items-center pt-2">
            <Button title="1" onClick={this.onClickedBtn} />
            <Button title="2" onClick={this.onClickedBtn} />
            <Button title="3" onClick={this.onClickedBtn} />
            <Button
              title="+"
              color="rgb(59 130 246)"
              onClick={this.onClickedBtn}
            />
            <Button
              title="-"
              color="rgb(59 130 246)"
              onClick={this.onClickedBtn}
            />
          </div>
          <div className="flex flex-row space-x-[23px] items-center pt-2">
            <Button title="^2" onClick={this.onClickedBtn} />
            <Button title="0" onClick={this.onClickedBtn} />
            <Button title="." onClick={this.onClickedBtn}/>
            <button className="rounded bg-blue-500 text-white w-[122px] h-12 hover:scale-110">
              ENTER
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
