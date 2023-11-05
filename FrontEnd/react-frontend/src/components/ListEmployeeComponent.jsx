import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



export default class ListEmployeeComponent extends Component {
  constructor(props){
    super(props)

    this.state ={
         employees:[]
    }

  }

  deleteItem(id){
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({ employees: this.state.employees.filter(employee => employee.id !== id)});
   });

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
          
          <Link to="/add" className="btn btn-info">Add</Link>
        
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
                            <td>
                            <button className="btn btn-danger" onClick={() => this.deleteItem(employee.id)}>Delete</button>

                            <Link to={`/update/${employee.id}`} className="btn btn-success" style={{marginLeft:'10px'}}>Update</Link>
                            
                            </td>

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
