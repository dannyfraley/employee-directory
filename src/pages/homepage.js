import React, { Component } from "react";
import Jumbotron from "../components/jumbotron";
import Search from "../components/search";
import Table from "../components/table";
import API from "../utils/API";

class Homepage extends Component {
   state = {
       employeeList: [], 
       originalList: [],
       search: "",
   }
   handleInput = event => {
       const {name, value} =event.target

       this.setState({
           [name]:value
       })
       console.log(value)
       const newEmployeeList = this.state.originalList.filter(employee => {
           return employee.name.first.toLowerCase().includes(value.toLowerCase()) || employee.name.last.toLowerCase().includes(value.toLowerCase())
       })
       
       this.setState({
           employeeList:newEmployeeList
       })
   }
   handleSubmit = event => {
       const newEmployeeList = this.state.employeeList.sort((a, b) => {
           return a.name.first.localeCompare(b.name.first)
       })
       this.setState({
           employeeList:newEmployeeList
       })

   }
   componentDidMount() {
       API.getRandomPeople().then(response => {
           this.setState({
               employeeList: response.data.results, 
               originalList: response.data.results
           })
       })
   }
    render() {
        return (
           <div>
               <Jumbotron/>
               <Search search = {this.state.search} handleInput={this.handleInput} />
               <Table employeeList={this.state.employeeList} handleSubmit={this.handleSubmit}/>
           </div>
        )
    }
}

export default Homepage