import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

// import { useParams } from "react-router-dom";
const WorkoutList = ({workouts}) => {

  return ( 
    <div className="workout">
        {workouts.map((workout) => (
          <div className="workout-preview" key={workout.id}>
            <h2>{workout.title}</h2>
            <div className="workout-content">
              <p>Body Part: {workout.description}</p>
              <p>Set: {workout.set} Reps: {workout.reps}</p>
              <p>lbs: {workout.weight}</p>
            </div>
            <p>Completed: {workout.completed} ✔️</p>
           <Link to={`/workouts/${workout.id}`} className="delete" >Delete</Link>
          </div>
        ))}
      </div>
   );
}
 
export default WorkoutList;