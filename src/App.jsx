import "./App.css";
import Button from "./components/Button";
import TextBox from "./components/TextBox";

function App() {
  return (
    <div className="h-screen bg-slate-900 text-white flex justify-center items-center">
      <div className="bg-slate-700 rounded shadow-lg h-96 w-80 flex flex-col justify-start items-center gap-2 p-8">
        <TextBox ph="username" />
        <TextBox ph="password" newclass="bg-red-600" />
        <div className="grow"></div>
        <Button
          title="Login"
          onClick={() => {
            console.log("salam");
          }}
        />
      </div>
    </div>
  );
}

export default App;
