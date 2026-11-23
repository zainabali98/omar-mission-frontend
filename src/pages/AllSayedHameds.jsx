import { useState, useEffect} from 'react'
import { Link } from 'react-router'
import axios from "axios"

function AllSayedHameds() {
    const [sayedHameds, setSayedHameds] = useState([])

    async function getAllSayedHameds(){
        const response = await axios.get(`${import.meta.env.VITE_BACK_END_SERVER_URL}/sayed-hameds`)
        setSayedHameds(response.data)
    }

    useEffect(()=>{
        getAllSayedHameds()
    },[])
  return (
    <div>
        <h1>All Sayed-Hameds</h1>
        {sayedHameds.map((oneSayedHamed)=>
        <div key={oneSayedHamed._id} to={`/sayed-hameds/${oneSayedHamed._id}`}>
            <h2>{oneSayedHamed.name}</h2>
            <img className='sayed-hamed-img' src={oneSayedHamed.sayedHamedImage} alt={oneSayedHamed.name} />
            <Link to={`/sayed-hameds/${oneSayedHamed._id}`}>Details</Link>
        </div>
    )}
    </div>
  )
}

export default AllSayedHameds