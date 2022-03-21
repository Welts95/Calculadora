import "./App.css";
import Botones from "./Botones";
import React, { useState } from "react";
import Display from "./Display";

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export default function App() {
  const [antic, setAntic] = useState(0);
  const [operacio, setOperacio] = useState("");
  const [display, setDisplay] = useState(0);
  const [novaEntrada, setNovaEntrada] = useState(false);
  const [historial, setHistorial] = useState([]);

  const calcular = () => {
    switch (operacio) {
      case "+":
        return setDisplay(antic + display);
      case "-":
        return setDisplay(antic - display);
      default:
        break;
    }
  };

  const entraOperacio = (operacio) => {
    setNovaEntrada(true);
    setAntic(display);
    if (!novaEntrada) calcular();
    setOperacio(operacio);
  };

  const netejaDisplay = () => {
    setAntic(0);
    setOperacio("");
    setDisplay(0);
  };

  return (
    <div className="App">
      <h1>Calculadora</h1>
      <div className="Container">
        <h2>CASIO</h2>
        <div className="Display">
          <label className="Historic">text</label>
          <br />
          <Display antic={antic} operacio={operacio} display={display} />
        </div>
        <div className="Botonera">
          <Botones
            numeros={numeros}
            novaEntrada={novaEntrada}
            setNovaEntrada={setNovaEntrada}
            display={display}
            clicar={setDisplay}
          />
        </div>
        <div className="Operadors">
          <button className="Boton" onClick={() => entraOperacio("+")}>
            +
          </button>
          <button className="Boton" onClick={() => entraOperacio("-")}>
            -
          </button>
          <button className="Boton" onClick={calcular}>
            =
          </button>
        </div>
        <button onClick={netejaDisplay} className="ClearInput" type="button">
          CLEAR
        </button>
      </div>
    </div>
  );
}
