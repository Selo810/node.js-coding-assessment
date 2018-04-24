import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {NavItem, Navbar, Icon} from 'react-materialize';

class NavBar extends React.Component {
    
    constructor(props){
        super(props);

        this.state ={
          appName : 'WebSiteName',
          authenticated: true
        };
    }

    render() {
    
        return (
            <div>
            <Navbar className="blue-grey darken-4" brand='Coding Assessment ' right>
            	<NavItem href='#'><Icon>home</Icon></NavItem>
            </Navbar>
            
            </div>
        );
    }
}

export default NavBar;