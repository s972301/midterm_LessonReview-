// /client/App.js
import React, { Component } from "react";
import axios from "axios";
import {BrowserRouter} from 'react-router-dom'
import Router from "./containers/Router";
import "./vendor/fontawesome-free/css/all.min.css";
//import "https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i";
import './css/sb-admin-2.min.css';

import SideBar from "./components/SideBar";
class App extends Component {
  // initialize our state 
 

  render(){
      return(
            
      <BrowserRouter>
        <div id="wrapper">
          <SideBar />
          
					<Router />
				</div>
        <script src="https://unpkg.com/react/umd/react.production.js" crossOrigin />
			</BrowserRouter>
      
      )
  }


  // here is our UI
  // it is easy to understand their functions when you 
  // see them render into our screen

//   render() {
//     const { data } = this.state;
//     return (
//       <div>
//         <ul>
//           {data.length <= 0
//             ? "NO DB ENTRIES YET"
//             : data.map(dat => (
//                 <li style={{ padding: "10px" }} key={data.message}>
//                   <span style={{ color: "gray" }}> id: </span> {dat.id} <br />
//                   <span style={{ color: "gray" }}> data: </span>
//                   {dat.message}
//                 </li>
//               ))}
//         </ul>
//         <div style={{ padding: "10px" }}>
//           <input
//             type="text"
//             onChange={e => this.setState({ message: e.target.value })}
//             placeholder="add something in the database"
//             style={{ width: "200px" }}
//           />
//           <button onClick={() => this.putDataToDB(this.state.message)}>
//             ADD
//           </button>
//         </div>
//         <div style={{ padding: "10px" }}>
//           <input
//             type="text"
//             style={{ width: "200px" }}
//             onChange={e => this.setState({ idToDelete: e.target.value })}
//             placeholder="put id of item to delete here"
//           />
//           <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
//             DELETE
//           </button>
//         </div>
//         <div style={{ padding: "10px" }}>
//           <input
//             type="text"
//             style={{ width: "200px" }}
//             onChange={e => this.setState({ idToUpdate: e.target.value })}
//             placeholder="id of item to update here"
//           />
//           <input
//             type="text"
//             style={{ width: "200px" }}
//             onChange={e => this.setState({ updateToApply: e.target.value })}
//             placeholder="put new value of the item here"
//           />
//           <button
//             onClick={() =>
//               this.updateDB(this.state.idToUpdate, this.state.updateToApply)
//             }
//           >
//             UPDATE
//           </button>
//         </div>
//       </div>
//     );
//   }
}

export default App;