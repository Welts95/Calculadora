import "./App.css";
import Botones from "./Botones";
import React, { useState } from "react";
import Input from "./Input";

export default function App() {
  let [numbers, setNumbers] = useState("0");
  let [operacio, setOperacio] = useState("");
  let resultat = "";

  const handleClick = (valor) => {
    switch (valor) {
      case "+":
        return (
          (resultat = numbers.toString() + "+"),
          setOperacio(resultat),
          console.log(resultat),
          setNumbers(0)
        );
      case "-":
        return (
          (resultat = numbers.toString() + "-"),
          setOperacio(resultat),
          console.log(resultat),
          setNumbers(0)
        );
      case "=":
        return (
          console.log("operacio: " + operacio + ", " + numbers),
          (resultat = operacio + numbers),
          console.log(operacio + numbers),
          setNumbers(Math.resultat)
        );
      default:
        return (
          (numbers = parseInt(numbers + valor)),
          console.log(numbers),
          setNumbers(numbers)
        );
    }
  };

  return (
    <div className="App">
      <h1>Calculadora</h1>
      <div className="Container">
        <h2>CASIO</h2>
        <div className="Input">
          <Input numbers={numbers} />
        </div>
        <div className="Botonera">
          <Botones value={"7"} clicar={handleClick} />
          <Botones value={"8"} clicar={handleClick} />
          <Botones value={"9"} clicar={handleClick} />
          <Botones value={"4"} clicar={handleClick} />
          <Botones value={"5"} clicar={handleClick} />
          <Botones value={"6"} clicar={handleClick} />
          <Botones value={"1"} clicar={handleClick} />
          <Botones value={"2"} clicar={handleClick} />
          <Botones value={"3"} clicar={handleClick} />
          <Botones value={"0"} clicar={handleClick} />
          <Botones value={"="} clicar={handleClick} />
        </div>
        <div className="Operadors">
          <Botones value={"+"} clicar={handleClick} />
          <Botones value={"-"} clicar={handleClick} />
        </div>
        <button
          onClick={() => setNumbers(0)}
          className="ClearInput"
          type="button"
        >
          CLEAR
        </button>
      </div>
    </div>
  );
}
