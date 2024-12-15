import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectedWrapper = ({children}) => {
const token = localStorage.getItem('userToken');
console.log(token)
const navigate = useNavigate();

useEffect(() => {
    if (!token) {
        navigate('/login');
    }
}, [token]);
    return (
        <>
            {children}
        </>
    )
}

export default UserProtectedWrapper