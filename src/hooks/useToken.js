// import { useNavigate } from "react-router-dom"

import { useEffect, useState } from "react"

// const navigate = useNavigate()
const useToken = email =>{
    const [token ,setToken] = useState('')
  useEffect(  ()=>{
    if(email){
        fetch(`https://doctors-portal-server-mu-five.vercel.app/jwt?email=${email}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.accessToken){
            localStorage.setItem('accessToken', data.accessToken)
            setToken(data.accessToken)
        }
    })
    }
  } ,[email]);
  return [token];
}


export default useToken;