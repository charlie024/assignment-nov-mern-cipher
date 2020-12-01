import './App.css';
import React, {Component} from 'react';
import Clicks from './Clicks.js';

class App extends Component {  
  state = {
    counter: 0
  }

  randomColorGenerator = () => {
    let color = '#'
    let letters = "0123456789ABCDEF"
    for (let i = 0; i < 6; ++i) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
  }

  addClick = () => {
    let newValue = this.state.counter + 1
    this.setState(
      {
        counter: newValue
      } // increments the value of counter
    )
    document.getElementById("change").style.backgroundColor = this.randomColorGenerator()
  }

  refresh = () => {
    this.setState({
      counter: 0
    })    
    document.getElementById("change").style.backgroundColor = 'white';
  }

  decreaseClick = () => {
    let newValue = this.state.counter - 1
    this.setState({
      counter: newValue
    })    
    document.getElementById('change').style.backgroundColor = this.randomColorGenerator()  

  }
 
  render() {
    return (
      <div>
        <h1>Clikz</h1>
        <div>
          {/* <h1 style = "display: inline-block, margin: 10px">CLIKZZ</h1> */}
          <Clicks counter = {this.state.counter} addClick = {this.addClick} refresh = {this.refresh} decreaseClick = {this.decreaseClick}></Clicks>
        </div>
      </div>
    )
  }
}

export default App;
