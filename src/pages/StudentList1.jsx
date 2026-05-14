import { useState, useEffect } from 'react'
import client from './Client'
import StudentCard from './Studentcard1'

export default function StudentList() {
  const [students, setStudents] = useState([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState('')

  // fetchStudents defined outside useEffect so handleDelete can call it too
  const fetchStudents = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await client.get('/students')
      setStudents(response.data)
    } catch (err) {
      setError('Failed to load students. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStudents()
  }, [])  // [] — fetch once when the component mounts

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this student? This cannot be undone.')) return

    try {
      await client.delete(`/students/${id}`)
      fetchStudents()   // re-fetch to keep the list in sync
    } catch (err) {
      alert('Delete failed. Please try again.')
    }
  }

  if (loading) {
    return <div className="sma-status">Loading students...</div>
  }

  if (error) {
    return (
      <div className="sma-status sma-status-error">
        {error}
        <button className="sma-retry-btn" onClick={fetchStudents}>Retry</button>
      </div>
    )
  }

  return (
    <section className="sma-section">
      <div className="sma-section-header">
        <h2 className="sma-section-title">All Students</h2>
        <span className="sma-student-count">{students.length} students</span>
      </div>

      {students.length === 0 ? (
        <div className="sma-empty-state">No students yet.</div>
      ) : (
        <div className="sma-student-grid">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </section>
  )
}

// This is the FINAL version of StudentList.
// Day 12 does NOT modify this component.
// Day 12 adds an edit button to StudentCard that links to a new page.