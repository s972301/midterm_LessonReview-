
import React, { Component } from "react";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button  } from 'react-bootstrap';
import {Route} from "react-router-dom"
export default class TopNavBar extends Component{
  state = {
    quickSearch:""}
  
  render(){
    return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="找課程" className="mr-sm-2" 
          onChange={e => this.setState({ quickSearch: e.target.value })}/>
          <Button variant="outline-success"
          href={"/find?"+this.state.quickSearch}>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
  }
  
}

