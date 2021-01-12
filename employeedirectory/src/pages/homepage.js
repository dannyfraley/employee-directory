import React, { Component } from "react";
import Jumbotron from "../components/jumbotron";
import Search from "../components/search";
import Table from "../components/table";
import API from "../utils/API";

class Homepage extends Component {
   state = {
       employeeList: [], 
       search: "",
   }
   componentDidMount() {
       API.getRandomPeople().then(response => {
           this.setState({
               employeeList: response.data.results
           })
       })
   }
    render() {
        return (
           <div>
               <Jumbotron/>
               <Search />
               <Table employeeList={this.state.employeeList}/>
           </div>
        )
    }
}

export default Homepage