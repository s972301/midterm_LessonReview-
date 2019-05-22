import React, { Component } from "react";
import classes from "./Home.module.css";
import { Form ,Row,Col,Button,Card } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import axios from "axios";
export default class Home extends Component {
    constructor(...args) {
        super(...args);
    
        this.state = { validated: false };
    }

    putDataToDB = stat => {
    
        axios.post("http://localhost:3001/api/putData", {
            semester:stat.semester,
            lesson:stat.lesson,
            teacher:stat.teacher,
            teaching: stat.teaching,
            sweet: stat.sweet,
            content: stat.content,
            test: stat.test,
            homework: stat.homework,
            comment: stat.comment
        });
      };



    handleSubmit(event) {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.putDataToDB(this.state)
        this.props.history.push("/home")
        this.setState({ validated: true });
      }
    
    state = {
        data: [],
        id: null,
        semester:null,
        lesson:null,
        teacher:null,
        teaching: null,
        sweet: null,
        content: null,
        test: null,
        homework: null,
        comment: null,
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null
      };

    render() {
        const { validated } = this.state;
        return (
            <div className={classes.wrapper}>
                <Card>

                    <Card.Body>Lesson Review Form</Card.Body>
                </Card>
                <Card> 
                    <Card.Body>
                    <Form validated={validated}
                    onSubmit={e => this.handleSubmit(e)}>
                        <Form.Row>
                        <Form.Group as={Col} controlId="formHorizontalEmail">
                        <Form.Label>學期 {this.state.semester}</Form.Label>
                        <Form.Control 
                        required
                        type="text"
                        as="select"
                        onChange={e => this.setState({ semester: e.target.value })}
                        >
                        <option></option>
                        <option>107-2</option>
                        <option>107-1</option>
                        </Form.Control>
                        </Form.Group>
                <Form.Group as={Col} controlId="formHorizontalEmail">
                     <Form.Label column sm={5}>
                         教師
                    </Form.Label>
                    <Col >
                    <Form.Control  
                    required
                    type="text" 
                    onChange={e => this.setState({ teacher: e.target.value })}
                    />                    
                    </Col>
                </Form.Group>
                        </Form.Row>


  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      課程名
    </Form.Label>
    <Col sm={10}>
    <Form.Control  
    required
    type="text" 
    onChange={e => this.setState({ lesson: e.target.value })}/>
    </Col>
  </Form.Group>

  {[['教學',"teaching"],['甜度',"sweet"], ['內容扎實','content'],["考試難度","test"],["作業負擔","homework"]].map(type => (
    <fieldset key={`inline-${type[0]}`}>
    <Form.Group as={Row} required>
    <Form.Label as="legend" column sm={2}>
        {type[0]} 
    </Form.Label>
    <Col sm={10}>
        {['1','2','3','4','5'].map(num=>(
            <Form.Check inline label={num} value={num}  type="radio" id={`inline-${type[0]}-1`} name={type[0]} 
            onChange={e => this.setState({ [type[1]]: e.target.value })}
            />
        ))}
    </Col>
     
    </Form.Group>
    </fieldset>
  ))}

    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>評論</Form.Label>
    <Form.Control required as="textarea" rows="20" 
    onChange={e => this.setState({ comment: e.target.value })}
    />
    </Form.Group>

  

  
  <Form.Group as={Row} controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check required label="同意提供資料" />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Submit</Button>
    </Col>
  </Form.Group>
</Form>
                    </Card.Body>
                </Card>
                
            </div>
        );
    }
}