import {React,useState} from 'react';
import StudentList1 from '../components/StudentList1';

function Hookstate(){
	const[c,setC]=useState(0);
	const[name,setName]=useState("A PAVAN KUMAR REDDY");
	const [student, setStudent] = useState(false);
	const Increment=()=>setC(c+1);
	
	const primaryBtn = {
		padding: "12px 20px",
		borderRadius: "10px",
		border: "none",
		background: "linear-gradient(90deg, #7c3aed, #2563eb)",
		color: "white",
		fontSize: "15px",
		fontWeight: "bold",
		cursor: "pointer",
		transition: "all 0.3s ease",
	};
	const Btn = {
		padding: "12px 20px",
		borderRadius: "10px",
		border: "none",
		background: "linear-gradient(90deg, #d6d2de, #dadde2)",
		color: "black",
		fontSize: "15px",
		fontWeight: "bold",
		cursor: "pointer",
		transition: "all 0.3s ease",
	};

	return(
	<div style={{textAlign:"center",fontSize:"20px",fontWeight:"bold",border:"5px solid black",borderRadius:"20px"}}>EXAMPLE PRACTISES
		{/* <h1> EXAMPLE PRACTISES</h1> */}
		<h1 style={Btn}>count : {c}</h1>
		<button onClick={Increment} style={primaryBtn}> INCREMENT </button>
		<button onClick={()=>setC(c-1)} disabled={c==0} style={primaryBtn}>DECREMENT</button>

		<h1 style={Btn}>NAME IS : {name}</h1>
		<button onClick={()=>setName("HARSHA")} style={primaryBtn}>CHANGE NAME</button>

      	<br /><h2>DETAILS</h2>
		<div className='list-of-s' style={Btn}>
		{student && <StudentList1 />}
		<p style={{color:"blue"}}>{student? "CLICK BELOW TO HIDE":"CLICK BELOW TO SHOW"}</p>
		</div>
		<button className="primary"
		onClick={() => setStudent(!student)} style={primaryBtn}>
        {student ? 'Hide' : 'Show'} Content
      	</button>

	</div>
	);
}
export default Hookstate;