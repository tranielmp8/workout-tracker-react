import { Link } from "react-router-dom";
// import useFetch from "../hooks/useFetch";

// import { useParams } from "react-router-dom";
const WorkoutList = ({workouts}) => {

  return ( 
    <div className="workout" >
        {workouts.map((workout) => (
          <div key={workout.id} className="workout-preview" >
            {console.log(workout.id)}
            <h2>{workout.title}</h2>
            <div className="workout-content">
              <p>Body Part: <span>{workout.description}</span></p>
              <p>Set: <span>{workout.sets}</span> Reps: <span>{workout.reps}</span></p>
              <p>lbs: <span>{workout.weight}</span></p>
            </div>
            <p>Completed: {workout.user_id} ✔️</p>
           <Link to={`/workouts/${workout.id}`} className="delete" >Delete</Link>
          </div>
        ))}
      </div>
   );
}
 
export default WorkoutList;