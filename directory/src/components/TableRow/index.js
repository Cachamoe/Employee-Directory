import React from "react";
import "./style.css";

function TableRow(props) {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {props.employeeInfo.length > 0 ? props.employeeInfo.map(employee => {
                    return (
                        <tr>
                        <th scope="row"><img src={employee.picture.large}/></th>
                        <td>{employee.name.first}</td>
                        <td>{employee.name.last}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
                    </tr>
                    )
                }) :  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr> }

    
            </tbody>
        </table>
    );
}

export default TableRow;

