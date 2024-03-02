import { API_URL } from "@/api/api"
import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const SignOut = ()=>{
    const navigate = useNavigate()
    useEffect(()=>{
        const fetchLogout = async ()=>{
            await axios.get(`${API_URL}auth/logout`, {
                withCredentials: true
            }).
            then(async (data)=>{
                await navigate('/')
                window.location.reload()
            })
        }

        fetchLogout()
    }, [])

    return (
        <p>You're getting logged out</p>
    )

}

export default SignOut