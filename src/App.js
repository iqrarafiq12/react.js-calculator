import { useState } from "react";
import "./App.css";

function App() {

  const [calc, setCalc] = useState("")


  // STOP RE-ENTER/ OPERATOR

  const ops = ["-", "+", "%", "/", "*", "."]

  const updateCalc = value => {
    if (ops.includes(value) && calc === "" ||
      ops.includes(value) && ops.includes(calc.slice(-1)
      )
    ) {
      return;
    }

    setCalc(calc + value)
  }
  // TOTAL/SETUP/AREA

  const calculate = () => {
    setCalc(eval(calc).toString())
  }
  // DELETE/SETUP/ARAE

  const deleteLastDigit = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1)
    setCalc(value)
  }

  return (

    <div className="App">

     { /* CALCULATOR SETUP */}
      <div className="Caculator-grid">

      {/* {CALCULATOR UNDER SCREEN } */}
        <div className="output">
          {calc || <span className="bigDisplay">0</span>}
        </div>
        <div className="calculator-button-sections">

          <div className="section-of-line1">

            <button onClick={deleteLastDigit}>Del</button>

            <button onClick={() => updateCalc("%")} className="Moduler">%</button>
            <button onClick={() => updateCalc("/")}>/</button>
          </div>

          <div className="section-of-line2">
            <button onClick={() => updateCalc("7")}>7</button>
            <button onClick={() => updateCalc("8")}>8</button>
            <button onClick={() => updateCalc("9")}>9</button>
            <button onClick={() => updateCalc("*")}>*</button>
          </div>


          <div className="section-of-line3">
            <button onClick={() => updateCalc("4")}>4</button>
            <button onClick={() => updateCalc("5")}>5</button>
            <button onClick={() => updateCalc("6")}>6</button>
            <button onClick={() => updateCalc("-")}>-</button>
          </div>


          <div className="section-of-line4">
            <button onClick={() => updateCalc("1")}>1</button>
            <button onClick={() => updateCalc("2")}>2</button>
            <button onClick={() => updateCalc("3")}>3</button>
            <button onClick={() => updateCalc("+")}>+</button>
          </div>


          <div className="section-of-line5">
            <button onClick={() => updateCalc("0")}>0</button>
            <button onClick={() => updateCalc(".")}>.</button>


            <button onClick={calculate} value="=">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;