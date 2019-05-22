import React, { Component } from "react";
import classes from "./Home.module.css";
import TopNavBar from "../components/TopNavBar"
import ReviewChart from "../components/ReviewChart"
import { Card  } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Form,Button ,ButtonToolbar,Row,Col } from 'react-bootstrap';
import axios from "axios";
export default class Home extends Component {
  constructor(search) {
    super();
    console.log(window.location.search)
    if(window.location.search!=""){
      this.filterDataFromDb({lesson:window.location.search.substr(1)})
      this.setState({fLesson:window.location.search.substr(1)})
    }else{
      this.filterDataFromDb()
    }

    
    
}
    state = {
        filter:"0",
        fLesson:"",
        fSem:"",
        fTeacher:"",
        filterDict:{},
        id: 0,
        message: null,
        data: [],
        intervalIsSet: false,
        pageState:0,
        columns: [
        {
          dataField: 'semester',
          text: '學期'
        }, 
        {
          dataField: 'lesson',
          text: '課程名',
          sort: true
        }, 
        {
          dataField: 'teacher',
          text: '教師',
          sort: true
        }, 
        {
          dataField: 'teaching',
          text: '教學',
          sort: true
        }, 
        {
          dataField: 'sweet',
          text: '甜度',
          sort: true
        }, 
        {
          dataField: 'content',
          text: '內容扎實',
          sort: true
        }, 
        {
          dataField: 'test',
          text: '考試難度',
          sort: true
        }, 
        {
          dataField: 'homework',
          text: '作業負擔',
          sort: true
        }, 
        {
          dataField: 'comment',
          text: '評論',
          sort: true
        }]
      } 



      getDataFromDb = () => {
        axios.get('http://localhost:3001/api/getData')
        .then(response=> {
          this.setState({ data: response.data.data })
          
        })
        .catch(function (error) {
          console.log(error);
      })};

      filterDataFromDb = (filter) => {
        console.log(filter)
        axios.get('http://localhost:3001/api/filterData?',{params:filter})
          .then((res) => this.setState({ data: res.data.data }));
      };
    
      handleApply() {
        var temp={}
        if(this.state.fLesson!=""){
          this.setState({ filter: "1" })
          temp['lesson']= this.state.fLesson
        }
        if(this.state.fSem!=""){
          this.setState({ filter: "1" }) 
          temp['semester']= this.state.fSem      
        }
        if(this.state.fTeacher!=""){
          this.setState({ filter: "1" }) 
          temp['teacher']= this.state.fTeacher    
        }

        console.log(temp); 
        this.filterDataFromDb(temp)
        
      }
      handleClear() {
        this.setState({ filter: "0" }) 
        this.getDataFromDb();
      }

      dataStat=() => {
        const { data } = this.state;
        var statDict={}
        const itemArray=["teaching","sweet","content","test","homework"]
        itemArray.map(item=>{
         statDict[item]={1:0,2:0,3:0,4:0,5:0,sum:0}     
        }
        )
        
        data.map(dat => {
            itemArray.map(item=>{
              statDict[item][dat[item]]++
              statDict[item]['sum']=statDict[item]['sum']+dat[item]
            }
            )
        })

        return(statDict)
      };

    render() {
      this.dataStat()
      const stat = this.dataStat()
      const itemArray=["teaching","sweet","content","test","homework"]
             return (
            <div className={classes.wrapper}>
                <TopNavBar/>
                <div class="card mb-4">
                <div class="card-header">
                  Add Filter
                </div>
                <div class="card-body">
                <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
               <Form.Label>教師</Form.Label>
                <Form.Control 
                onChange={e => this.setState({ fTeacher: e.target.value })}/>
                  </Form.Group>

                < Form.Group as={Col} controlId="formGridState">
                <Form.Label>學期</Form.Label>
                <Form.Control as="select"
                onChange={e => this.setState({ fSem: e.target.value })}>
                    <option></option>
                    <option>107-2</option>
                    <option>107-1</option>
                </Form.Control>
                    </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>課名</Form.Label>
                    <Form.Control 
                    placeholder={window.location.search.substr(1)}
                    onChange={e => this.setState({ fLesson: e.target.value })}/>
                    </Form.Group>
                  </Form.Row>
                  <ButtonToolbar>
                  <Button variant="primary" size="lg"
                  onClick={()=>this.handleApply()}>
                    Apply
                  </Button>
                  <Button variant="primary" size="lg"
                  onClick={()=>this.handleClear()}>
                    Clear
                  </Button>
                  </ButtonToolbar>
                </div>
              </div>
              <Card>
                    <Card.Body>
                    <div class="card mb-4">
                    <div class="card-header">
                    評價圖
                    </div>
                    <div class="card-body">
                    <Row>
                    {
                      itemArray.map(item=>
                        (<ReviewChart
                          data={stat[item]}
                          id={item} />)
                      )
                    }
                    </Row>

                    </div>
                    </div>
                    </Card.Body>
                </Card>;
                <Card>
                    <Card.Body>
                    <div class="card mb-4">
                    <div class="card-header">
                    評價資料
                    </div>
                    <div class="card-body">


                     <BootstrapTable 
                    striped
                    hover
                    keyField='id' 
                    data={ this.state.data } 
                    columns={ this.state.columns } 
                    pagination={ paginationFactory()}/>
                    </div>
                    </div>
                    </Card.Body>
                </Card>;
                
            </div>
        );
    }
}