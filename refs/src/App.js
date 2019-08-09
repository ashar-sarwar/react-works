import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.firstInput = React.createRef()
    this.lastInput = React.createRef()
    this.submit = React.createRef()
  }


  keyUp = (e) => {
    if (e.keyCode === 13) {
      this.lastInput.current.focus()
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <span>First Name:</span>
          <input ref={this.firstInput} type="text" onKeyUp={this.keyUp} />
        </div>

        <div>
          <span>Last Name:</span>
          <input ref={this.lastInput} type="text" />
        </div>

        <div>
          <input ref={this.submit} type="submit" value="submit" />
        </div>

      </div>
    );
  }
}

export default App;