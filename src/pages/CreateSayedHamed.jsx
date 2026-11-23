import axios from 'axios';
import {useState} from 'react'
import { useNavigate } from 'react-router';

function CreateSayedHamed() {
    const [formData, setFormData] = useState({
    name:"",
    sayedHamedImage: "",
  });

  
  const navigate = useNavigate()
  function handleChange(event){
    setFormData({...formData, [event.target.name]:event.target.value})
  }


  
    async function handleSubmit(event){
      event.preventDefault()
      const createdHoot = await axios.post(`${import.meta.env.VITE_BACK_END_SERVER_URL}/sayed-hameds`,formData)
      navigate('/sayed-hameds')
    }

  
  return (
    <div>
        <h1>Create Sayed-Hamed</h1>
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
            <button>Create Sayed-Hamed</button>
          </form>
    </div>
  )
}

export default CreateSayedHamed