import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'
import logo from "../assets/react.svg"

const Login = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isLoading) {
            navigate('/login'); 
        }
    }, [isLoading, navigate]);

    return (
        <div>
            {isLoading ? (
                <div>
                    <img src={logo} className="logo react" alt="Splash Screen" />
                </div>
            ) : null}
        </div>
    );
};

export default Login;
