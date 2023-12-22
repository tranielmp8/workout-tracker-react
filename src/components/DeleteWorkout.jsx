import { useParams, useNavigate } from "react-router-dom"
import useFetch from "../hooks/useFetch"

const DeleteWorkout = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const { data: workout } = useFetch('http://localhost:8000/workouts/' + id)

    const handleDelete = async() => {
      const response = await fetch('http://localhost:8000/workouts/' + id, {
        method: 'DELETE'
      })
      
      navigate('/')      
    }
 
const handleCancel = () => {
  navigate('/')
}

  return ( 
    <div className="workout-details">
      <h2>Delete Workout: {workout.title}?</h2>
      <div className="buttons">
        <button onClick={handleDelete} >Confirm Delete</button>
        <button onClick={handleCancel} >cancel</button>
      </div>
      
     
    </div>
   );
}
 
export default DeleteWorkout;