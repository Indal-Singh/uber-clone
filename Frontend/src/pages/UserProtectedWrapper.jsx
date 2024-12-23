import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const UserProtectedWrapper = ({children}) => {
const token = localStorage.getItem('userToken');
const navigate = useNavigate();
const [isloading, setIsLoading] = useState(true);

useEffect(() => {
    if (!token) {
        navigate('/login');
    }

    const checkToken = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (response.status === 200) {
                setIsLoading(false);
            }
        } catch (error) {
            console.error('error : ',error.message);
            localStorage.removeItem('userToken');
            navigate('/login');
        }
    }
    checkToken();

}, [token]);
    return (
        <>
            {children}
        </>
    )
}

export default UserProtectedWrapper