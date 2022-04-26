import React,{ Component } from 'react';

function Card(props){

    function deleteItem(itemToDel){
      props.deleteApointment(itemToDel)
    }

    return (
      <div className="card text-white bg-secondary mb-3" >
						<div className="card-header">
						<div className='pet-head'>
							<span className='pet-name'>
                <button onClick={()=>{deleteItem(props.item.petName)}} className='btn btn-danger'>X </button> 
                &nbsp;
								{props.item.petName}
							</span>
							<span className='apt-date pull-right'>
								{props.item.aptDate}
							</span>
						</div>
						</div>
						<div className="card-body">
							<h5 className="card-title"><b>Owner: </b>{props.item.ownerName}</h5>
							<p className="card-text">{props.item.aptNotes}</p>
						</div>
					</div>
      
    );
  
  
}

export default Card;



