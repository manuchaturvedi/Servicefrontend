import React, { Component } from 'react'
import './TableStyle.css';

class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to overrAgentIde Component class constructor
      this.state = { //state is by default an object
         students: [
            { AgentId: 1, AgentName: 'Wasif Kan', age: 21, email: 'wasif@email.com' },
            { AgentId: 2, AgentName: 'Manu', age: 19, email: 'manu@email.com' },
            { AgentId: 3, AgentName: 'jone wick', age: 16, email: 'saad@email.com' },
            { AgentId: 4, AgentName: 'Adam crick', age: 25, email: 'asad@email.com' }
         ]
      }
   }
   renderTableData() {
    return this.state.students.map((student, index) => {
       const { AgentId, AgentName, age, email } = student //destructuring
       return (
          <tr key={AgentId}>
             <td>{AgentId}</td>
             <td>{AgentName}</td>
             <td>{age}</td>
             <td>{email}</td>
          </tr>
       )
    })
 }
 renderTableHeader() {
    let header = Object.keys(this.state.students[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
        <div>
        <h1 id='title'>View Booking</h1>
        <table Id='students'>
           <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
           </tbody>
        </table>
     </div>
      )
   }
}

export default Table