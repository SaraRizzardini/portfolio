import './App.css';
import React, { useEffect, useRef, useState } from "react";

const DrumMachine = () => {
  const audioContextRef = useRef(null);
  const [currentSound, setCurrentSound] = useState("");
  useEffect(() => {
    try {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      alert("Web Audio API is not supported in this browser");
    }
  }, []);

  const sounds = {
    Q: "gun-bass.mp3",
    W: "siren.mp3",
    E: "plantain.mp3",
    A: "mamma.mp3",
    S: "miao.mp3",
    D: "yu hu.mp3",
    Z: "heater6.mp3",
    X: "kick.mp3",
    C: "heater1.mp3",
  };

  const playSound = (key) => {
    const context = audioContextRef.current;
	 if (context.state === "suspended") {
    context.resume();
  }
    if (context && sounds[key]) {
      const audio = new Audio(process.env.PUBLIC_URL + "/sounds/" + sounds[key]);
      const button = document.getElementById(key);
      button.classList.add("active");
      audio.addEventListener("ended", () => button.classList.remove("active"));
      const track = context.createMediaElementSource(audio);
      track.connect(context.destination);
	  setCurrentSound(sounds[key].split(".")[0]); 
      audio.play();
    }
  };
 const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    playSound(key);
  };

  useEffect(() => {
    try {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      alert("Web Audio API is not supported in this browser.");
    }

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <div className="App">
      <center>
        <div className="drum-machine d-flex flex-row ">
          <div className="p-2" style={{ width: "50%", height: "auto" }}>
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {["QWE", "ASD", "ZXC"].map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <th scope="row"></th>
                    {row.split("").map((key) => (
                      <td key={key}>
                        <button
                          type="button"
                          id={key}
                          className="drum-pad btn btn-secondary btn-lg"
                          onClick={() => playSound(key)}
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
		  <div className="p-2" style={{width:"50%", height:'auto', backgroundColor:"rgba(0,0,0,0.9)"}}>
		  <div className="display rounded-pill"style={{top:"50%", height:'auto'}}>{currentSound}</div>
</div>

        </div>
      </center>
    </div>
  );
}

export default DrumMachine;