import axios from "axios";
import Form from "../../components/Form";
import { API_URL } from "@/api/api";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate()
    const onSubmitHandler = async (form, callback) => {

         await axios.post(`${API_URL}auth/login`, form, {
            withCredentials: true
        }).then(async (data)=>{
            navigate('/')
            window.location.reload()
        })
        callback();
    };

    return (
            <Form
                title={"Sign In"}
                formArr={formArr}
                submitBtn={"Sign In"}
                onSubmit={onSubmitHandler}
                redirect={{
                    label: "Don't have an account?",
                    link: {
                        label: "Register",
                        to: "/register",
                    },
                }}
            />
    );
};

const formArr = [
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

export default SignIn;