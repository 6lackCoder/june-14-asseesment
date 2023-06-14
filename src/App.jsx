import React, { Component } from 'react'
import UserOutput from './Components/UserOutput'
import UserInput from './Components/UserInput'

export class App extends Component {
  // Creating a state thats holds the value of wande-coal
  state = {
    name: 'Wande-coal'
  };

  // Creating a method that handle the change event
  onChangeHandler = (event)=>{
    this.setState({name: event.target.value});
  };
  
  render() {
    return (
      <div className=' flex flex-col items-center  gap-5 bg-green-300 w-[35rem] mx-[auto] p-10' >
        <UserOutput username={this.state.name}/>
        {/* Passing two props to my input component to handle the change event and value*/}
        <UserInput change={this.onChangeHandler} value={this.state.name}/>
      </div>
    )
  }
}

export default App;