import React from "react";
import ReactDOM from "react-dom";
import { Form ,Row,Col,Button,Card ,ProgressBar } from 'react-bootstrap';
import Chart from "react-google-charts";



const pieOptions = {
    title: "",
    pieHole: 0.1,
    slices: [
      {
        color: "#2BB673"
      },
      {
        color: "#d91e48"
      },
      {
        color: "#007fad"
      },
      {
        color: "#e9a227"
      }
    ],
    legend: {
      position: "none",
      alignment: "right",
      textStyle: {
        color: "233238",
        fontSize: 14
      }
    },
    tooltip: {
      showColorCode: true
    },
    chartArea: {
      left: 5,
      top: 5,
      width: "100%",
      height: "90%"
    },
    fontName: "Roboto"
  };

const itemCh={"teaching":'教學',"sweet":'甜度',"content":'內容扎實',"test":'測驗難度',"homework":'作業負擔'}

export default ({ data,id }) => {
    const meanScore=data['sum']/(data[1]+data[2]+data[3]+data[4]+data[5])

    const options = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Website Traffic Sources"
        },
        legend:{
            position:"none"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "false",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
        }]
    }
    return (
        <Col xs={6}>     
    <Card >
    <div class="card border-left-info shadow h-100 py-2">
                <div class="card-body">
                <Row>
                    <div class="col mr-2">
                    
                    <div class="text-xs font-weight-bold text-info text-uppercase mb-1">{itemCh[id]} {id}</div>
                    <ProgressBar now={meanScore/5*100} label={meanScore.toFixed(1)} width={'60%'} />           
                      

                    </div>

                    <div class="col mr-2">
                  <Chart
      chartType="PieChart"
      data={[["Age", "Weight"], ["1分", data[1]], ["2分", data[2]], ["3分", data[3]], ["4分", data[4]], ["5分",data[5]]]}
      options={pieOptions}
      graph_id={id}
      width={"150px"}
      height={"120px"}
      legend_toggle='true'
    />
                  </div>
                  </Row>
                </div>
              </div>
              
  </Card>  
  </Col>    
    );
};