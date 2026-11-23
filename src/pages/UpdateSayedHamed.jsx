import axios from 'axios';
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router'


function UpdateSayedHamed() {

    const [formData, setFormData] = useState({
    name:"",
    sayedHamedImage: "",
  });

    const { id } = useParams()

      async function getSayedHamed(){
    const response = await axios.get(`${import.meta.VITE_BACK_END_SERVER_URL}/sayed-hameds/${id}`)
    setFormData(response.data)
  }


  
  const navigate = useNavigate()
  function handleChange(event){
    setFormData({...formData, [event.target.name]:event.target.value})
  }


  
    async function handleSubmit(event){
      event.preventDefault()
      const createdHoot = await axios.put(`${import.meta.env.VITE_BACK_END_SERVER_URL}/sayed-hameds/${id}`)
      navigate('/sayed-hameds')
    }

  useEffect(()=>{
      getSayedHamed()
  },[])

  return (
    <div>
        <h1>Update Sayed-Hamed</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Sayed-Hamed Name: </label>
            <input 
            name="name"
            type="text"
            id="name"
            onChange={handleChange}
            value={formData.name}
            />
            <label htmlFor="sayedHamedImage">Sayed-Hamed Image: </label>
            <input 
            name="sayedHamedImage"
            type="text"
            id="sayedHamedImage"
            onChange={handleChange}
            value={formData.sayedHamedImage}
            />
            <button>Update Sayed-Hamed</button>
          </form>
    </div>
  )
}

export default UpdateSayedHamed
