import React from "react"
import { data } from './Api';

export function CardBody() {
    <div className="card-body">
        <table id="datatablesSimple">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                </tr>
            </tfoot>
            <tbody>
                {
                    data.map((Person) => {
                        return (
                            <tr>
                                <td>{Person.Name}</td>
                                <td>{Person.Position}</td>
                                <td>{Person.Office}</td>
                                <td>{Person.Age}</td>
                                <td>{Person.StartDate}</td>
                                <td>{Person.Salary}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
}