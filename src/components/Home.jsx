import useFetch from "../hooks/useFetch";
import WorkoutList from "./WorkoutList";

const Home = () => {
  
  const { data: workouts, error } = useFetch('http://localhost:8080/workouts')

  // useEffect(() => {
  //    fetch('http://localhost:8000/workoutss')
  //    .then(res => {
  //     if(!res.ok){
  //       throw Error('Could not fetch data!')
  //     }
  //     return res.json()
  //    })
  //    .then(data => {
  //     setWorkouts(data);
  //     setError(null)
      
  //    })
  //    .catch((err) => {
  //     setError(err.message)
  //    })
 
  // }, [])


  return ( 
    <div className="home">
      <h1>HomePage</h1>
      {error && <div> {error} </div>}
      {workouts && <WorkoutList workouts={workouts} />}
      {/* <WorkoutList workouts={workouts.filter((workout) => workout.description === 'arms')}/> */}
    </div>
   );
}
 
export default Home;