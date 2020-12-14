import logo from './logo.svg';
import './App.css';
import TableRow from "./components/TableRow";
import React, { Component } from "react";
import API from "./utils/API.js";
import Search from "./components/Search";

class App extends Component {
  state = {
    employeeInfo: [],
    keyword: "",
    originalInfo: [],
  }
  
  handleOnChange = (event) => {
    const {name, value} = event.target

    this.setState( {
      [name]: value
    });

    console.log(value)
    let newEmployees = this.state.originalInfo.filter(employee => {
      return employee.name.first.toLowerCase().includes(value.toLowerCase())
    });

    this.setState({
      employeeInfo: newEmployees
    });
  }

  componentDidMount() {
    API.getRandomUsers().then(employees => {
      this.setState({
        employeeInfo: employees.data.results, 
        originalInfo: employees.data.results,
      }); 
    });  
  }

  render() {
    return (
      <>
      <Search handleOnChange = {this.handleOnChange} keyword = {this.state.keyword}/>
      <TableRow employeeInfo = {this.state.employeeInfo}/>
      </>
    );
  };
}

export default App;
