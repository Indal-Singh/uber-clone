import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const CaptainProtectedWrapper = ({children}) => {
const token = localStorage.getItem('captainToken');
const navigate = useNavigate();
const [isloading, setIsLoading] = useState(true);

// validate if the Captain Token valid or not


useEffect(() => {
    if (!token) {
        navigate('/captain-login');
    }

    const checkToken = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (response.status === 200) {
                setIsLoading(false);
            }
        } catch (error) {
            console.error('error : ',error.message);
            localStorage.removeItem('captainToken');
            navigate('/captain-login');
        }
    }
    checkToken();
}, [token]);
    return (
        <>
            {isloading?'Loading..':children}
        </>
    )
}

export default CaptainProtectedWrapper