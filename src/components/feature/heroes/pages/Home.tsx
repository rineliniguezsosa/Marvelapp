import { useEffect,useState } from "react"
import axios from 'axios';
import { UsuarioRequest } from "../../../../types/interfaces";
const getall = import.meta.env.VITE_GETALL;



export const Home = () => {
  const [userdata, setUserData] = useState<UsuarioRequest | []>([])
  console.log(userdata);
  
  const getUsers = async() =>{
    try {
      const req = await axios.get<UsuarioRequest>(getall);
      const resp = await req.data;
      console.log(resp);
      setUserData(resp)
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    getUsers()
  },[])

  return (
    <div className="w-full h-screen border-2 flex border-blue-600">
        {/* contenido de mi api, lista de usuarios  */}
        <div className="w-3/5 border-2 border-red-500">

        </div>

        <div className="w-2/5 border-2 border-red-500">
          {/* form,agregar nuevas items */}

        </div>
    </div>
  )
}
