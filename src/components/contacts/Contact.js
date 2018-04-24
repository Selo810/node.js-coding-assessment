import React, { Component } from 'react';
import {Icon} from 'react-materialize';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toBeUpdated: false,
      ...props.e
    };
    this.deleteContact = this.deleteContact.bind(this);
  }
      
   //delete contact function
       deleteContact = event => {
        event.preventDefault();
         let id = this.props.uniqueID;
          
        this.props.onContactDelete(id);
      }
      
      
 async componentDidMount() {
     
      try {
  
        this.setState({
              first_name: this.props.first_name,
              last_name: this.props.last_name,
              home: this.props.home,
            });
      } catch (e) {
        alert(e);
      }
    }
      

  render() {
      
    return (
          <tr>
            <td>{this.state.first_name}</td>
            <td>{this.state.last_name}</td>
            <td>{this.state.home}</td>
            <td><span><a href="#!" class="" onClick={ this.deleteContact }><Icon onClick={ this.deleteContact } className='red-text'>delete</Icon></a></span></td>
          </tr>
      
    );
  }
}

export default Contact;