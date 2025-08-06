import './App.css';
import React, { useEffect, useRef, useState } from "react";

const Calculator = () => {
 const [currentDisplay, setCurrentDisplay] = useState("");
	const numbers = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
	0:"zero",
	".":"decimal",
	"+":"adding",
	"-":"substracting",
  "X":"multiplying",
  "/":"dividing",
  "=":"equals"
  };
 
  const displayAdd=(key)=>{
	  if(currentDisplay === ""){
	  setCurrentDisplay(key);   
  }
  else if(key === "="){
	   let displayToEvaluate = currentDisplay.replace(/X/g, "*");
	  const result = eval(displayToEvaluate);
        setCurrentDisplay(result.toString());
      } 
  else if(key === "C") {
      setCurrentDisplay(""); // Clear display
    } 
  else {
      // Prevent starting with multiple operators
      if (
        ["+", "-", "*", "/"].includes(key) &&
        ["+", "-", "*", "/"].includes(currentDisplay.slice(-1))
      ) {
        return;
      }

      setCurrentDisplay((prev) =>
        prev === "0" ? key : prev.concat(key)
      );
    }
  };
  //keydown effect
  useEffect(() => {
  const handleKeyDown = (event) => {
    let key = event.key;

    // Normalize input to match calculator
    if (key === "Enter") key = "=";
    if (key === "*") key = "X";
    if (key === "Escape") key = "C";
    if (key === "c" || key === "C") key = "C";
    
    const validKeys = ["0","1","2","3","4","5","6","7","8","9",".","+","-","/","X","=","C"];
    if (validKeys.includes(key)) {
      event.preventDefault(); // Prevent default behavior (like form submit)
      displayAdd(key);
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [currentDisplay]);


  return (
     <div className="App">
      
        <div className="calculator d-flex flex-column" id="back-calculator"style={{ width: "100%", height: "auto"}}>
          <div
            className="p2"
            style={{ width: "100%", height: "auto",  backgroundColor:"#212529" }}
          >
            <div
              className="display rounded-pill mb-3 p-3  text-light"
              style={{ textAlign: "right !important", minHeight: "50px", width:"100%", padding:"20px"}}
            >
              {currentDisplay}
            </div>
			</div>
			<div
            className="p-2"
            style={{ width: "100%", height: "auto",  backgroundColor:"#212529" }}
          >
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  
                  
                </tr>
              </thead>
              <tbody>
                {["C/X","123", "456", "789","0.=","-+"].map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <th scope="row"></th>
                    {row.split("").map((key) => (
                      <td key={key}>
                        <button
                          type="button"
                          id={numbers[key]}
                          className={`number btn btn-secondary btn-lg `}
                          onClick={() => displayAdd(key)}
                          style={{minWidth:"120px"}}
                        >
                          {key}
                        </button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
		  </div>
      
    </div>
  );
 
}

export default Calculator;