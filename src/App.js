import React, { Component } from "react";
import Nested from "./nest";
import AddNinja from './Addninja';


class App extends Component {

  state = {
    ninjas: [

      { name: "hhh", age: "20", belt: "black", id: 1 },

      { name: "hell", age: "20", belt: "red", id: 2 }

    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return id !== ninja.id;

    });
    console.log(ninjas);

    this.setState({
      ninjas: ninjas
    })

  }

  componentDidMount() {
    console.log("component is mounted");

  }
  componentDidUpdate(prevProps, preState) {
    console.log("component updated");
    console.log(preState, prevProps);

  }


  render() {
    return (
      <div className="App">
        <h1>welcome to react</h1>
        <Nested ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />

        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
