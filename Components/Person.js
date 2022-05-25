import React from 'react'

export default function Person(props) {
    const {name,position,office,age,startDate,salary} = props;
    
    
    return (
        <tr>
            <td>{name}</td>
            <td>{position}</td>
            <td>{office}</td>
            <td>{age}</td>
            <td>{startDate}</td>
            <td>{salary}</td>
        </tr>
    )
}