import React, { Component } from 'react';

class TableBody extends Component {
 
    render() {
      
        return (
            <tbody>
                {this.props.data.map(item=>(
                    <tr key = {item._id}>
                        <td>{item.title}</td>
                        <td>{item.genre.name}</td>
                        <td>{item.numberInStock}</td>
                        <td>{item.dailyRentalRate}</td>
                    </tr>
                ))}
            </tbody>
        );
    }
}

export default TableBody;