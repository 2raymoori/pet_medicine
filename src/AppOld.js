import logo from './logo.svg';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar';
import Form from './Components/Form';
import React,{ Component } from 'react';
import Card from './Components/Card';
class  App extends Component {
  constructor(props){
    super(props);
    this.state = {
      appointments:[]
    }
  }
  getData = (data)=>{
    console.log(data);
      this.setState({appointments:[...this.state.appointments,data]})
  } 
  render(){
    return (
      <div >
      <div id="navContainer" className="bg-primary">
      <NavBar />
      </div>
      <Form addData={this.getData}/>
      <div className="container">
      {
        this.state.appointments.map((d,k)=>{
          return <Card key={k} data = {d}/>
        })
      }
      </div>
      </div>
    );
  }
  
}

export default App;
