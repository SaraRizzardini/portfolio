import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Preview from './Preview.js';



class Notes extends Component {
  state = {
    body: "<h1> Your Title</h1>\n<h2>Here a nice subtitle</h2>\n<p><strong>Here you can add some bold text</strong><br/>\n<lu>and why not a list:<li>first item</li>\n<li>second item</li>\n<li>You can add and remove list items</li>\n</lu>\n<br></br><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>\n<blockquote>Keep It Simple And Stupid</blockquote><footer><i>Your name</i></footer> ",
    backgroundColor:"rgba(255, 255, 255, 0.5)",
    fontColor: "#000000",
    fontStyle: "Helvetica"
  };

  update = (event) => {
    this.setState({ body: event.target.value });
  };
   handleBackgroundChange = (event) => {
    this.setState({ backgroundColor: event.target.value });
  }

  handleFontChange = (event) => {
    this.setState({ fontStyle: event.target.value });
  }
  handleColorChange = (event) =>{
	this.setState({ fontColor: event.target.value });
}

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <br />
          <textarea
            id="editor"
            className="form-control-plaintext form-control-lg"
            spellCheck="false"
            
            value={this.state.body}
             style={{
            minHeight:'300px',
				    padding: '20px',
					  overflow: 'hidden', 
            textAlign:'left',
                    zIndex: 22,       
                    width: "100%",
                    height: "auto"
                  }}
            
           onChange={(event) => {
    this.update(event);
    // Dynamically resize textarea height
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
  }}
          />
          <p></p>
          <div className="row">
          <div className="col-sm-5">
          <label for="backgroundColorInput" className="form-label">Background-Color picker</label>
<input type="color" className="form-control form-control-color" id="exampleColorInput1"  value={this.state.backgroundColor} onChange={this.handleBackgroundChange} title="Choose your color"></input>
</div>
  <div className="col-sm-5">
<label for="fontColorInput" className="form-label">Font-Color picker</label>
<input type="color" className="form-control form-control-color" id="exampleColorInput2"  value={this.state.fontColor}
                    onChange={this.handleColorChange} title="Choose your color"></input>
                  </div>
                  <div className="col-sm-5">
  <label htmlFor="fontStyleSelect" className="form-label">Font Style</label>
  <select className="form-select" id="fontStyleSelect" value={this.state.fontStyle} onChange={this.handleFontChange}>
    <option value="Helvetica">Helvetica</option>
    <option value="Times New Roman">Times New Roman</option>
    <option value="Courier New">Courier New</option>
    <option value="Georgia">Georgia</option>
    <option value="Arial">Arial</option>
    <option value="Verdana">Verdana</option>
  </select>
</div>

                    </div>
         <Preview
  body={this.state.body}
  style={{
    fontFamily: this.state.fontStyle,
    backgroundColor: this.state.backgroundColor,
    color: this.state.fontColor,
    
  }}
/>
</div>
      </div>
    );
  }
}

export default Notes;