import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import ContactBox from "./ContactBox";
import ContactTable from "../components/contacts/ContactTable";
import NavBar from "./NavBar";

class HomePage extends React.Component {

    render() {
    
        return (
            <div className="page container">
                  <NavBar/>
                   <hr/>
                  <h4>Static Data</h4>
                  <hr/>
                  <ContactTable/>
                  <br/>
                  <hr/>
                  <h4>Dynamic Data</h4>
                  <hr/>
                  <ContactBox/>
                  <hr/>
                  <br/>
                  <br/>
            </div>
        );
    }
} 

export default HomePage;