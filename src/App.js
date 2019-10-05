import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Car from "./Car/Car.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [
        { name: "asfa", year: 2020 },
        { name: "ad", year: 202 },
        { name: "asgggfa", year: 2022 }
      ],
      title: "New title",
      showCars: false
    };
  }

  changeTitle(newTitle) {
    this.setState({
      title: newTitle
    });
  }

  toggleCars() {
    this.setState({
      showCars: !this.state.showCars
    });
  }
  handleInput(e) {
    this.setState({
      title: e.target.value
    });
  }

  changeCarName(name, index) {
      //copyraight array cars from state
      const cars = [... this.state.cars];

      //get car from state.cars from index
      const car = this.state.cars[index];
      //change name
      car.name = name;
      //insert into cars car with new name
      cars[index] = car;
      // update state
      this.setState({
        cars
      });
  }

  deleteCar(index) {
    const cars = [... this.state.cars];
    cars.splice(index,1);
    this.setState({
      cars
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header" style={{ textAlign: "center" }}>
          <h1> {this.state.title}</h1>
          <button onClick={this.toggleCars.bind(this)}> Toggle Cars</button>
          <input
            onChange={this.handleInput.bind(this)}
            name=""
            id=""
            className="btn btn-primary"
            type="text"
          />

          {this.state.showCars
            ? this.state.cars.map((car, index) => {
                 
                return (
                  <Car
                    key={index}
                    name={car.name}
                    year={car.year}
                    onChangeName={(event) =>this.changeCarName(event.target.value, index)}
                    onDelete = {this.deleteCar.bind(this, index)}
                  /> 
                );
              })
            : null}
        </header>
      </div>
    );
  }
}

export default App;
