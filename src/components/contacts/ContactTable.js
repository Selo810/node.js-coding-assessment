import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import ReactTable from "react-table";
import matchSorter from 'match-sorter';

class ContactTable extends React.Component {
     constructor(props) {
        super(props);
        
        this.state = { 
            data: [ 
                   { first_name: 'Rose', last_name: 'Tyler', home: 'Earth' },
                   { first_name : 'Zoe', last_name: 'Heriot', home: 'Space Station W3'},
                   { first_name : 'Jo', last_name: 'Grant', home: 'Earth'},
                   { first_name : 'Leela', last_name: 'Tyler', home: 'Unspecified'},
                   { first_name : 'Romana', last_name: 'Wilber', home: 'Gallifrey'},
                   { first_name : 'Clara', last_name: 'Oswald', home: 'Earth'},
                   { first_name : 'Adric', last_name: 'Will', home: 'Alzarius'},
                   { first_name : 'Alec', last_name: 'Will', home: 'Alzarius'},
                   { first_name : 'John', last_name: 'Burk', home: 'Alzarius'},
                   { first_name : 'John', last_name: 'Doe', home: 'Alzarius'},
                   { first_name : 'Emly', last_name: 'Will', home: 'Alzarius'},
                   { first_name : 'Adric', last_name: 'Will', home: 'Alzarius'},
                   { first_name : 'Susan', last_name: 'Foreman', home: 'Gallifrey'} 
                ]
         };
      }
    

    render() {
        
    
    const { data } = this.state;
    
    return (
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  id: "first_name",
                  accessor: d => d.first_name,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["first_name"] }),
                  filterAll: true
                },
                {
                  Header: "Last Name",
                  id: "last_name",
                  accessor: d => d.last_name,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["last_name"] }),
                  filterAll: true
                }
              ]
            },
            {
              Header: "Address",
              columns: [
                {
                  Header: "Home",
                  id: "home",
                  accessor: d => d.home,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["home"] }),
                  filterAll: true
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
    );
    }
} 

export default ContactTable;