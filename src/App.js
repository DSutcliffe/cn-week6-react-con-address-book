import React, { Component } from 'react'
import './css/App.css';

class App extends Component {

  state = {
    inputValue: "",
    phoneNumber: []
  }

  updateInput = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  storeNumber = () => {
    let joined = this.state.phoneNumber.concat(this.state.inputValue)
    this.setState({
      phoneNumber: joined
    })
  }

  render() {
    console.log(this.state)
    // const items = this.state.phoneNumber.map(item => <li>{item}</li> );
    const items = this.state.phoneNumber.map(item => <h3>{item}</h3> );

    return (
      <div>
        <h1>Address Book</h1>
        <input type="text" onChange={this.updateInput}/>
        <button onClick={this.storeNumber}>Store Number</button>

        {/* <h3>{this.state.phoneNumber}</h3> */}
        
        {items}

        {/* <ul>
          {items}
        </ul> */}

      </div>
    )
  }
}

export default App;