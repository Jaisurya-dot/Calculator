import React, { useState } from "react";
import "./calculate.css"; 

function Calculator() {
  const [input, setInput] = useState("");

  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); 
    } catch {
      setInput("");
    }
  };

  const clearAll = () => {
    setInput("");
  };

  const backspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  
  return (
    
    <div className="calculator-container">
       
      <div className="display">{input || "0"}</div>
      <div className="button-container">
        <button onClick={clearAll} className="button clear">
          AC
        </button>
        <button onClick={backspace} className="button">
          ⌫
        </button>
        <button onClick={() => handleInput("/")} className="button">
          ÷
        </button>
        <button onClick={() => handleInput("*")} className="button">
          ×
        </button>

        <button onClick={() => handleInput("7")} className="button">
          7
        </button>
        <button onClick={() => handleInput("8")} className="button">
          8
        </button>
        <button onClick={() => handleInput("9")} className="button">
          9
        </button>
        <button onClick={() => handleInput("-")} className="button">
          −
        </button>

        <button onClick={() => handleInput("4")} className="button">
          4
        </button>
        <button onClick={() => handleInput("5")} className="button">
          5
        </button>
        <button onClick={() => handleInput("6")} className="button">
          6
        </button>
        <button onClick={() => handleInput("+")} className="button">
          +
        </button>

        <button onClick={() => handleInput("1")} className="button">
          1
        </button>
        <button onClick={() => handleInput("2")} className="button">
          2
        </button>
        <button onClick={() => handleInput("3")} className="button">
          3
        </button>
        <button onClick={() => handleInput(".")} className="button">
          .
        </button>  <button onClick={() => handleInput("0")} className="button zero">
          0
        </button>
        
        <button onClick={calculateResult} className="button equals">
          =
        </button>

      
      </div>
    </div>
  );
}

export default Calculator;
