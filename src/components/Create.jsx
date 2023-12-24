import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('arms')
  const [sets, setSets] = useState('')
  const [reps, setReps] = useState('')
  const [weight, setWeight] = useState('')
  // const [date, setDate] = useState(Date.now())
  // const [isComplete, setIsComplete] = useState(false)

  //navigation
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const workout = {title, description, sets, reps, weight}

    const res = await fetch('http://localhost:8080/workouts', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(workout)
  
    })
    const body = await res.json()
    console.log(body)
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
        {/* <input
          type="text"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />
   */}
        <div className="flex">
          <div>
            <label >Number of Sets:</label>
            <input 
              type="number" 
              value={sets}
              onChange={(e) => setSets(e.target.value)}
              required
              min={0}
              max={1000}
            />
          </div>
          <div>
            <label >Number of Reps:</label>
            <input 
              type="number" 
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              required
              min={0}
              max={1000}
            />
            </div>
        </div>
        <label >Weight (lbs):</label>
            <input 
              type="number" 
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
              min={0}
              max={1000}
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