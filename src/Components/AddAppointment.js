import React, { useState } from 'react'

export default function AddAppointment(props) {
    //{petName:"",ownerName:"",aptDate:"",aptTime:"",aptNote:""}

    const [petName, setPetName] = useState("");
    const [ownerName,setOwnerName] = useState("");
    const [aptDate,setAptDate] = useState("");
    const [aptTime,setAptTime] = useState("");
    const [aptNote,setAptNote] = useState("");

    const captureData = (e)=>{
        const value = e.target.value;

        switch(e.target.name){
            case "petName":
                setPetName(value)
                break;
            case "ownerName":
                setOwnerName(value);
                break;
            case "aptNote":
                setAptNote(value);
                break;
            case "aptTime":
                setAptTime(value);
                break;
            default:
                setAptDate(value);
        }
        
    }

    const submitForm = (e)=>{
        e.preventDefault();
        console.log(`${petName} :: ${ownerName} :: ${aptDate} :: ${aptTime} :: ${aptNote}`);
        const appointment = {
                "petName": petName,
                "ownerName": ownerName,
                "aptDate": `${aptDate} ${aptTime}`,
                "aptNotes": aptNote
              }

        props.addData(appointment);
        setPetName(""); setOwnerName(""); setAptNote("");  setAptTime("");setAptDate("");
    }

  return (
    <div className='container'>
        <div className='form-container'>
        <div>
            <section className="formHeader">
                <button>+</button><span><b>Add Appointment</b></span>
            </section>
        </div>
        <div className='formContent'>
            <form action="#" onSubmit={submitForm}>
        <div className="form-group has-success has-feedback">
  <label className="control-label" htmlFor="inputSuccess2">Pet Name</label>
  <input type="text" name="petName" value={petName} onChange={captureData} placeholder="Pet's Name" class="form-control" id="inputSuccess2" aria-describedby="inputSuccess2Status"/>
  <span className="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true" ></span>
  {/* <span id="inputSuccess2Status" className="sr-only">(success)</span> */}
</div>

<div className="form-group has-warning has-feedback">
  <label className="control-label" htmlFor="inputWarning2">Pet Owner</label>
  <input type="text" placeholder="Owner's Name" name="ownerName" value={ownerName} onChange={captureData} className="form-control" id="inputWarning2" aria-describedby="inputWarning2Status"/>
  <span className="glyphicon glyphicon-warning-sign form-control-feedback" aria-hidden="true"></span>
  {/* <span id="inputWarning2Status" className="sr-only">(warning)</span> */}
</div>

<div className="form-group has-error has-feedback">
  <label className="control-label" htmlFor="inputError2">Date</label>
  <input type="date" className="form-control" id="inputError2" aria-describedby="inputError2Status" name="aptDate" value={aptDate} onChange={captureData}/>
  <span className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
  {/* <span id="inputError2Status" className="sr-only">(error)</span> */}
</div>
<div className="form-group has-success has-feedback">
  <label className="control-label" htmlFor="inputGroupSuccess1">Time</label>
  <div className="input-group">
    {/* <span className="input-group-addon">@</span> */}
    <input type="time" className="form-control" id="inputGroupSuccess1" aria-describedby="inputGroupSuccess1Status"  name="aptTime" value={aptTime} onChange={captureData} />
  </div>
  <span className="glyphicon glyphicon-ok form-control-feedback" aria-hidden="false"></span>
  {/* <span id="inputGroupSuccess1Status" className="sr-only">(success)</span> */}
</div>
<div className="form-group has-success has-feedback">
  <label className="control-label" htmlFor="aptNote">Apt. Notes</label>
  <div className="input-group">
    {/* <span className="input-group-addon">@</span> */}
    <textarea placeholder='Appointment Notes' className="form-control" id="aptNote" aria-describedby="inputGroupSuccess1Status"  name="aptNote" value={aptNote} onChange={captureData}></textarea>
  </div>
  <span className="glyphicon glyphicon-ok form-control-feedback" aria-hidden="false"></span>
  {/* <span id="inputGroupSuccess1Status" className="sr-only">(success)</span> */}
</div>
<div className="form-group has-success has-feedback">
  <div className="input-group">
    {/* <span className="input-group-addon">@</span> */}
    <input type="submit" value ="sumit" className="form-control btn btn-success" aria-describedby="inputGroupSuccess1Status"/>
  </div>
  <span className="glyphicon glyphicon-ok form-control-feedback" aria-hidden="false"></span>
  {/* <span id="inputGroupSuccess1Status" className="sr-only">(success)</span> */}
</div>

            </form>
        </div>
    </div>
    </div>
  )
}
