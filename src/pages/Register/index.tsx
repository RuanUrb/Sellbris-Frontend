import { API_URL } from "@/api/api";
import Form from "../../components/Form";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    
    const onSubmitHandler = async (form, callback) => {
        try{
            const res = await axios.post(`${API_URL}auth/register`, form, {
                withCredentials: true
            })
            if(res.data)
            navigate('/')
        }
        catch(e){
            console.log(e)
        }
    };

    return (
            <Form
                title={"Register"}
                formArr={formArr}
                submitBtn={"Register"}
                onSubmit={onSubmitHandler}
                redirect={{
                    label: "Already have an account?",
                    link: {
                        label: "Sign In",
                        to: "/signin",
                    },
                }}
            />
    );
};

const formArr = [
    {
        label: "Name",
        name: "name",
        type: "text",
    },
    {
        label: 'Location',
        name: 'location',
        type: 'text'
    },
    {
        label: "Email",
        name: "email",
        type: "text",
    },

    {
        label: "Password",
        name: "password",
        type: "password",
    },
    

];

export default Register;