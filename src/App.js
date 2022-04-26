import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import NavBar from './Components/NavBar';
import Card from './Components/Card';
import AddAppointment from './Components/AddAppointment';
function App(){
	const [count,setCount] = useState(0);
	const [appData,setAppData] =useState([
		{
		  "petName": "Buffy",
		  "ownerName": "Hassum Harrod",
		  "aptDate": "2016-06-20 15:30",
		  "aptNotes": "This Chihuahua has not eaten for three days and is lethargic"
		},
		{
		  "petName": "Spot",
		  "ownerName": "Constance Smith",
		  "aptDate": "2016-06-24 08:30",
		  "aptNotes": "This German Shepherd is having some back pain"
		},
		{
		  "petName": "Goldie",
		  "ownerName": "Barot Bellingham",
		  "aptDate": "2016-06-22 15:50",
		  "aptNotes": "This Goldfish has some weird spots in the belly"
		},
		{
		  "petName": "Mitten",
		  "ownerName": "Hillary Goldwyn",
		  "aptDate": "2016-06-21 9:15",
		  "aptNotes": "Cat has excessive hairballs"
		}
	  ])

	const addData = (inputData)=>{
		console.log(inputData);
		// const newState = ;
		// console.log([...appData,inputData]);
	    setAppData([...appData,inputData])

	}
	  
	const [appState,setAppState]= useState({
		title:"Appointments"
	})
	const addCounter = ()=>{
		setCount(count+1);
	}

	useEffect(()=>{
		setTimeout(()=>{addCounter()},1000);
		document.title=`LOT ${count} `;

	});
	const deleteApointment = (itemToDel)=>{
		const oldState = appData;
		const newState = oldState.filter((e)=>{
			return e.petName != itemToDel
		})
		setAppData(newState)
	}
return(
	<div className='container'>
		<NavBar />
		<AddAppointment addData = {addData} />

		<section className='container'>
			<h1>{appState.title}</h1>
			{appData.length === 0 ? <h1>No Apointment Yet</h1>:<ul className='item-list media-list'>
				{appData.map((data,key)=>{
					return(
				<li key={key} className='pet-item media'>

					<Card deleteApointment={deleteApointment} item = {data}/>
			
			</li>
					)
				})}

			</ul>}
		</section>
		<footer>
			<h1>Footer Section...</h1>
		</footer>
	</div>
	
)
}
// https://goo.gl/UJC3UA
export default App;
