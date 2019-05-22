import React, { Component } from "react";
import classes from "./Home.module.css";
import TopNavBar from "../components/TopNavBar"
import { Card  } from 'react-bootstrap';
//import reactLogo from "../../../img/react.png"
export default class Home extends Component {
    render() {
        
        return (
            <div className={classes.wrapper}>
                <TopNavBar/>
                <Card>
                    <Card.Body>歡迎來到 Lesson Review+</Card.Body>
                </Card>;
                <div class="container-fluid">

          <h1 class="h3 mb-4 text-gray-800"></h1>

          <div class="row">

            <div class="col-lg-6">

              
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">緣起</h6>
                </div>
                <div class="card-body">
                  <p>
                  在其他課堂的活動中，討論到了目前課程資訊系統在意見回饋上的問題，而有了另建網頁的想法
                  </p>
                  <a href="https://docs.google.com/document/d/1WwV81ScpI97bHzohfKDyqxO7NUJ9L0xf-C0c349CsPs/edit?fbclid=IwAR3I41IJEvqsWXHDLFCjMkinvg_QKsFv8VsObYTFHkWVR-7P0y-qkcmX4IA" target="_blank" title="連結替代文字">英文版提案</a>
                  
            
                  
                  </div>
              </div>

      
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">目前功能</h6>
                    <p>
                      填課程評價的頁面，須將表格填寫完成後才能送出，資料會被儲存於MongoDB中
                    </p>
                    <p>
                      瀏覽評價的頁面，可以添加課程/學期/教師的篩選，可依各項目排序
                    </p>
                    <p>
                      頁面上方有快速搜尋課程的功能
                    </p>
                    <p>
                      之後也許會慢慢加新功能?
                    </p>
                </div>
                <div class="card-body">
            
                </div>
              </div>

            </div>

            <div class="col-lg-6">

              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">所使用網頁模板</h6>
                </div>
                <div class="card-body">
                  <p>
                    在前端的製作上，主要是使用React-bootstrap包及SB Admin2的樣式 <br/>
                    <a href=" https://startbootstrap.com/themes/sb-admin-2/" target="_blank" title="連結替代文字">SB Admin 2</a>
                               
                  </p>
                  
                 </div>
              </div>

              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">之前的問券調查</h6>
                </div>
                <div class="card-body">
                  <p>
                    樣本數94 <br/>
                    以Google表單製作的線上問券<br/>
                    <a href="https://drive.google.com/file/d/1lGjdzOWBdEACClvE0s2pnR8BB8lDl6E6/view?usp=sharing" target="_blank" title="連結替代文字">課程評價問券調查結果</a>
                               
                  </p>
                  
                 </div>
              </div>

            </div>

          </div>

        </div>
                
            </div>
        );
    }
}