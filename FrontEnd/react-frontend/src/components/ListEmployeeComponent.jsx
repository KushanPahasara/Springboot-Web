import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

export default class ListEmployeeComponent extends Component {
  constructor(props){
    super(props)

    this.state ={
         employees:[]
    }
  }
 
   componentDidMount(){
     EmployeeService.getEmployees().then((res) => {
        this.setState({ employees: res.data})
     });
   }
    render() {
    return (
      <div>
        
          <h2 className="text-center">Item List</h2>
          <div className="row">
            <table className='table table-striped table-bordered'>
               
               <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>actions</th>
                </tr>
               </thead>
        
               <tbody>
                  {
                    this.state.employees.map(
                        employee =>
                        <tr key={employee.id}>
                           <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.price}</td>
                            <td>{employee.quantity}</td>

                        </tr>
                    )
                  }

               </tbody>
            </table>

          </div>

      </div>
    )
  }
}
