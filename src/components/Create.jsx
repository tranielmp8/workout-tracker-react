import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('arms')
  const [set, setSet] = useState(0)
  const [reps, setReps] = useState(0)
  const [weight, setWeight] = useState(0)
  // const [isComplete, setIsComplete] = useState(false)

  //navigation
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const workout = {title, description, set, reps, weight}

    fetch('http://localhost:8000/workouts', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(workout)
    }).then(() => {
      console.log('new blog added')
    })
    navigate('/')

  }

  return ( 
    <div className="create">
      <h2>Add New Workout</h2>
      <form onSubmit={handleSubmit}>
        <label >Workout Title:</label>
        <input 
          type="text" 
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label >Workout Description:</label>
        <select
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        >
          <option value="arms">arms</option>
          <option value="legs">legs</option>
          <option value="chest">chest</option>
          <option value="back">back</option>
          <option value="glutes">glutes</option>
        </select>
        <div className="flex">
          <div>
            <label >Number of Sets:</label>
            <input 
              type="number" 
              value={set}
              onChange={(e) => setSet(e.target.value)}
            />
          </div>
          <div>
            <label >Number of Reps:</label>
            <input 
              type="number" 
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
            </div>
        </div>
        <label >Weight (lbs):</label>
            <input 
              type="number" 
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
        {/* <div className="complete">
          <label >Completed:</label>
          <p>Completed:  </p>
          <input 
            type="checkbox" 
            onChange={(e) => setIsComplete(e.target.value)}
          />
        </div> */}

        <button>Add Workout</button>
      </form>
      
    </div>
   );
}
 
export default Create;