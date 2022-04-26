import React,{Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            flag:false
        }
    }
    showForm = ()=>{
        const data = {
            pName:"lamin",
            pOwner:"Touray",
            appData:"20.10.2021",
            time:"10:10 PM",
            appNote:"This is a Simple NOte to be verified ..."
        }
        this.props.addData(data);
        this.setState({flag:!this.state.flag})
    }

    render(){
        const renderAuthButton = () => {
            if (this.state.flag) {
              return <div id="form">
              <div>
              <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                  <input className="form-control form-control-lg" type="text" placeholder="Pet Name" aria-label=".form-control-lg example" />
                  </div>
              </div>
              &nbsp;
              <div className="row">
              
              <div className="col-lg-12 col-md-12 col-sm-12">
              <input className="form-control form-control-lg" type="text" placeholder="Pet Owner" aria-label=".form-control-lg example" />
              </div>
              </div>
              &nbsp;
              <div className="row">
                  <div className="col-lg-6">
                  <div className="row">
              
                  </div>
                  <div className="row">
                      <div className="col-lg-4">
                            <span>Appointment Date</span>
                      </div>
                      <div className="col-lg-8">
              
                  <input className="form-control form-control-lg" type="date" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
                      </div>
                  </div>
              
                  </div>
              
                  <div className="col-lg-6">
                  <div className="row">
                      <div className="col-lg-4">
                            <span>Appointment Date</span>
                      </div>
                      <div className="col-lg-8">
              
                  <input className="form-control form-control-lg" type="time" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
                      </div>
                  </div>
                 
                  </div>
              </div>
              &nbsp;
              <div className="row">
                <div className="col-lg-12">
                    <textarea placeholder="APT. NOTES. Cat will not respond to his name." class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
              </div>
              
              
              </div>
              </div>;
            }
          }
        return(

      <div className="container" id="formContainer">
      <div onClick={this.showForm} className="bg-primary" id="addAppointment">
          + Add Appointment
      </div>
      &nbsp;
      {renderAuthButton()}


    </div>
        );
    }
}
export default Form;
