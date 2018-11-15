import React, { Component } from 'react';

// columns : array
// sortColumn: object
// onSort: function
class TableHeader extends Component {
    
    raiseSort = (column)=>{
        const sortColumn = {...this.props.sortColumn};
        sortColumn.column = column;
    
        if(sortColumn.column === column){
            sortColumn.order === 'desc'? sortColumn.order = 'asc' : sortColumn.order = 'desc';
        }
        else{
            sortColumn.order = 'asc' ;
        }
      
        sortColumn.column = column;
        // I don't have state in this MoviTable component, because I want the state to be handled in the movies component. 
        // Because of this, I am using this.props.onSort to call this.sortEventHandler in the movies component which will then set state.
        this.props.onSort(sortColumn);
    }
    render() {
        return (
            <thead>
                <tr>
                    {this.props.columns.map(col =>(
                            <th 
                                key = {col.column || col.key}
                                onClick = { ()=> {this.raiseSort(col.column)} } scope="col"
                            >
                            {col.label}
                            </th>
                        ))
                    }
                </tr>
             </thead>
        );
    }
}

export default TableHeader;