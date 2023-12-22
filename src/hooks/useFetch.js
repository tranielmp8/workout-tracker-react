import { useState, useEffect } from "react";

//'http://localhost:8000/workouts' took it out of fetch to make it more resuable instead of hardcoded
const useFetch = (url) => {
  // const [data, setWorkouts] = useState([])
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
   // using await

   useEffect(() => {
    const abortCont = new AbortController()

    const fetchWorkouts = async () => {
      try {
        const response = await fetch(url, {signal: abortCont.signal})
        const json = await response.json()
        if(!response.ok) {
        throw Error("Unable to fetch Data")
        }
      
        if(response.ok) {
          setData(json)
          setError(null)
        } 
      } catch (err) {
        if(err.name === 'AbortError'){
          console.log("Fetch Aborted")
        }else {
          setError(err.message)

        }
      }
    }

    fetchWorkouts() 
    return () => abortCont.abort()

  }, [url])

  // in a custom hook need to return state
  return {data, error}

}

export default useFetch;


// without abort controller being added!

// useEffect(() => {
//   const fetchWorkouts = async () => {
//     try {
//       const response = await fetch(url)
//       const json = await response.json()
//       if(!response.ok) {
//       throw Error("Unable to fetch Data")
//       }
    
//       if(response.ok) {
//         setData(json)
//         setError(null)
//       } 
//     } catch (err) {
//       setError(err.message)
//     }
//   }

//   fetchWorkouts() 
// }, [])

// // in a custom hook need to return state
// return {data, error}
