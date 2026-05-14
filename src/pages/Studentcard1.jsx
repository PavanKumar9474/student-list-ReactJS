import {Link} from 'react-router-dom'
export default function StudentCard({ student, onDelete }) {
  const { id, name, age, email, city = 'Unknown' } = student

  return (
    <div className="sma-student-card" style={{background:"blue",borderRadius:"20px",color:"white",fontWeight:"bold"}}>
      <div className="sma-student-card-avatar">
        {name.charAt(0).toUpperCase()}
      </div>
      <div className="sma-student-card-body" style={{color:"white",fontWeight:"bold"}}>
        <p className="sma-student-card-name">{name}</p>
        <p className="sma-student-card-detail">{email}</p>
        <button
          className="sma-btn-icon sma-btn-icon-delete"
          onClick={() => onDelete(id)}
          title="Delete student" style={{position:"absolute",marginLeft:"70em",marginTop:"20px"}}>❌
        </button>
          <Link to="/students/:id/edit" className="sma-btn sma-btn-primary" style={{color:"yellow",background:"black",marginTop:"10px",position:"absolute",marginLeft:"16em"}}>
            Edit Student
          </Link>
        <div className="sma-student-card-footer" >
          <span className="sma-student-card-age">Age:{age}</span>
        </div>
        <span className="sma-student-card-tag" style={{marginBottom:"2rem"}}>{city}</span>
        <div className="sma-card-actions" style={{background:"white",position:"absolute",marginLeft:"40em",color:"red"}}>
        </div>
      </div>
      <h1 style={{marginLeft:"40px"}}></h1>
    </div>
  )
}

// Changes from Day 9:
// 1. Now accepts 'student' object prop instead of individual props
// 2. Destructures id, name, age, email, city from student
// 3. Added: sma-card-actions div with delete button
// 4. Delete button calls onDelete(id) — StudentList handles the API call
// Note: Edit button is added in Day 12 when we build the edit page