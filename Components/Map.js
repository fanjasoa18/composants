export function Map (){
    return (
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
            }))
                
}