import React from "react";
function Table(props) {
    return (
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col" onClick={props.handleSubmit}>Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>


    </tr>
  </thead>
  <tbody>
      {props.employeeList ? props.employeeList.map(employee=> {
          return(
            <tr>
            <th scope="row"><img src={employee.picture.thumbnail} alt='Employee thumbnail'/></th>
            <th scope="row">{`${employee.name.first} ${employee.name.last}`}</th>            
            <th scope="row">{employee.phone}</th>
            <th scope="row">{employee.email}</th>
            <th scope="row">{employee.dob.date}</th>
          </tr>
          )
      }):    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>}

    
     
  </tbody>
</table>
    )
}

export default Table