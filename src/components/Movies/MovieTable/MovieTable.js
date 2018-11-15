import React, { Component } from 'react';
import Like from '../../UI/Like/Like';
import Pagination from '../../UI/Pagination/Pagination';
import TableHeader from '../../UI/TableHeader/TableHeader';
import TableBody from '../../UI/TableBody/TableBody';



class MovieTable extends Component {
    columns = [
        {column:'title' ,label:'Title' },
        {column:'genre.name' ,label:'Genre' },
        {column:'numberInStock' ,label:'Stock' },
        {column:'dailyRentalRate' ,label:'Rate' },
        {key: 'like' },
        { key: 'delete'} // passing two empty obj so they will be rendered. These columns do not have headers ie. 'like' 'delete'
    ];

    render() {
      
        const {movies,onDelete,onLike,onPageChange,onSort,pageSize,items,currentPage} = this.props
        return (
             <React.Fragment>
               <table className="table">
                <TableHeader
                    columns = {this.columns}
                    sortColumn = {this.props.sortColumn}
                    onSort = {onSort}
                />
                <TableBody
                    data = {movies} 
                />
                
                <tbody>
                {movies.map(movie=>(
                    <tr key = {movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                            <Like
                                liked ={movie.liked}
                                onLike = {()=>{onLike(movie)} }
                                color = 'orangered'
                                size = 'lx'
                            />
                        </td>
                        <td>
                            <button onClick = { () => {onDelete(movie)} } className = "btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
                </table>
             <Pagination 
                pageSize = {pageSize}
                items = {items}
                onPageChange = {onPageChange}
                currentPage = {currentPage}
             />

             </React.Fragment>
     
    );
    }
}

export default MovieTable;


