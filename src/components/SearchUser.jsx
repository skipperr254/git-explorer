import axios from "axios";
import { useEffect, useState } from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";

const SearchUser = () => {
    const [username, setUsername] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState("Submit");
    const [attempts, setAttempts] = useState(3);
    const navigate = useNavigate();

    const handleGetUser = async () => {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        if (response.status == 200) {
            // redirect
            navigate(`/users/user/${username}`);
        }
        return response;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading("Loading...");
        if (username) {
            handleGetUser().catch(() => {
                setLoading("Submit");
                setAttempts(currentAttempt => currentAttempt - 1);
                setErrorMsg(`User Does Not Exist! ${attempts - 1} Attempts remaining`);
            });
        }
    };

    useEffect(() => {
        if (attempts <= 0) {
            setErrorMsg("Too many attempts, REDIRECTING...");
            setTimeout(() => {
                navigate("/users");
            }, 2000)
        }
    }, [attempts, navigate])

    return (
        <>
            <h3>Search User</h3>
            <form onSubmit={handleSubmit} className="login-form">
                {
                    errorMsg && (
                        <span style={{ fontSize: "12px", color: "orangered" }}>
                            {" "}
                            {errorMsg}
                        </span>
                    )
                }
                <input
                    type="text"
                    placeholder="GitHub Username"
                    className="login-inp"
                    onChange={(e) => {
                        setUsername(e.target.value);
                        setErrorMsg(null);
                    }} />
                <button type="submit" className="login-submit-btn">{loading}</button>
            </form>
        </>
    )
}

export default SearchUser;
