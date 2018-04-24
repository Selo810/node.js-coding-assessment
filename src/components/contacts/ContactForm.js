import React, { Component } from 'react';
import axios from 'axios';
import {Row, Input} from 'react-materialize';

class ContactForm extends React.Component {
  constructor(props) {
      
    super(props);
    
    this.state = {
        errors: {},
        ...props.e
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  //Custom validations
      handleValidation(){
        let errors = {};
        let formIsValid = true;
    
        if(!this.state.first_name){
            formIsValid = false;
            errors["first_name"] = "First name is required";
        }
        
        
        if(!this.state.last_name){
            formIsValid = false;
            errors["last_name"] = "Last name is required";
        }
        
        if(!this.state.home){
            formIsValid = false;
            errors["home"] = "Home is required";
        }
        
    
        this.setState({errors: errors});
        return formIsValid;
    }

  
  //Handle form input change
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
         this.setState({
           [name]: value
         });
    
     }
      
      //Handle submit
      handleSubmit = async event => {
        event.preventDefault();
        
        //Check for validation before submit
        if(this.handleValidation()){
            try {
    
                await this.props.onContactSubmit({
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    home: this.state.home,
                });
              
              this.setState({ 
                    first_name: '',
                    last_name: '',
                    home: '',
                    });
          
            } catch (e) {
              alert(e);
            }
            
        }
      }
      

  render() {
    return (
       <form onSubmit={this.handleSubmit}>
       
             <Row>
                <Row>
                <Input name="first_name" s={12} label="First Name" value={this.state.first_name} onChange={this.handleChange}/>
                <span style={{color: "red"}} s={6}>{this.state.errors["first_name"]}</span>
                </Row>
                <Row>
                <Input name="last_name" s={12} label="Last Name" value={this.state.last_name} onChange={this.handleChange}/>
                <span style={{color: "red"}} s={6}>{this.state.errors["last_name"]}</span>
                </Row>
                
                <Input name="home" s={12} label="Home" value={this.state.home} onChange={this.handleChange}/>
                <span style={{color: "red"}} s={12}>{this.state.errors["home"]}</span>
            </Row>
            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
            </button>
       </form>
    );
  }
}

export default ContactForm;