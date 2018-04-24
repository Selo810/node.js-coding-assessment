import React, { Component } from 'react';
import axios from 'axios';
import {Modal, Button, Icon} from 'react-materialize';
import ContactList from "../components/contacts/ContactList";
import ContactForm from "../components/contacts/ContactForm";

class ContactBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        contact: []
    };
    this.handleContactDelete = this.handleContactDelete.bind(this);
    this.handleContactSubmit = this.handleContactSubmit.bind(this);
  }
  
  
    async componentDidMount() {
          
        try {
           //get contact
          let contacts = await this.getContact();
          
          console.log(contacts);
          
          if(contacts){
            
             this.setState({
                contact: contacts.data,
              });
          }
          
        } catch (e) {
          alert(e);
        }
     }
      
      
//handle form submit 
 async handleContactSubmit(contact) {
    let contacts = this.state.contact;
    contact.id = Date.now();
    
    let newcontacts = contacts.concat([contact]);
    
    this.setState({ contact: newcontacts });
    
     try {
    
          await this.createContact(contact);
          
        } catch (e) {
          alert(e);
        }
  }
  
  
  //handle contact remove function
  async handleContactDelete(id) {
      
       try {
    
          await this.deleteContact(id);
          
          //get contact
          let contact = await this.getContact();
          
          this.setState({
            contact: contact.data,
          });
          
        } catch (e) {
          alert(e);
        }
      
  }

  
  /*Route functions*/
  
  //Post to API
  createContact(contact) {
    
    return axios.post('https://coding-assessment-selo810.c9users.io:8081/api/contacts', contact)
      .catch(err => {
        console.error(err);
      });
    
  }
  
  //Get Contacts from API    
  getContact() {
    return axios.get('https://coding-assessment-selo810.c9users.io:8081/api/contacts')
        .catch(function (error) {
          console.log(error);
        });
  }
  
  //Remove Contact
  deleteContact(id) {
    return axios.delete(`https://coding-assessment-selo810.c9users.io:8081/api/contacts/${id}`)
      .catch(err => {
        console.error(err);
      });
  }


  render() {
    return (
                
            <div className="row">
            <div class="col s12 m12">
              <div class="cardss">
                      <span class="right">
                      
                      {/*Add contact modal*/}
                        <Modal
                          header='Add contact'
                          trigger={<a href="#!" class="right"><i class="small material-icons light-blue-text text-darken-4">add</i></a>}>
                          <ContactForm  onContactSubmit={ this.handleContactSubmit }/>
                        </Modal>
                      {/*Add contact modal*/}    
                      
                      </span>
                  <ContactList 
                    contact={this.state.contact}
                    onContactDelete={ this.handleContactDelete } 
                    />
              </div>
            </div>
          </div>
    );
  }
}

export default ContactBox;