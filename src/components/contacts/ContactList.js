import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
  render() {
    //Loop throught contacts
     let ContactNodes = this.props.contact.map(c => {
      return (
        <Contact
          uniqueID={ c['_id'] }
          key={ c._id } 
          first_name={ c.first_name } 
          last_name={ c.last_name } 
          home = { c.home } 
          onContactDelete ={ this.props.onContactDelete }
          >
           
        </Contact>
      );
    });
    return (
      <div>
        
        <table class="responsive-table">
        <thead>
          <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Home</th>
              <th>Remove</th>
          </tr>
        </thead>

        <tbody>
          
         { ContactNodes }
        
        </tbody>
      </table>
      </div>
    );
  }
}

export default ContactList;
