import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn, setUsername }) => {
    const [loginUsername, setLoginUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const navigate = useNavigate();

    const dummyUserObject = {
        username: "skipperr254",
        password: "12345"
    };

    const handleLogin = e => {
        e.preventDefault();

        if (loginUsername === dummyUserObject.username && password === dummyUserObject.password) {
            setUsername(loginUsername);
            setIsLoggedIn(true);
            navigate("/profile");
        } else {
            setErrorMsg("Invalid Login Credeantials");
        }
    };

    return (
        <form onSubmit={handleLogin} className="login-form">
            <legend><h1>Login</h1></legend>
            <span className="error-span" style={{ fontSize: "12px", color: "orangered" }}>{errorMsg}</span>
            <label style={{ marginTop: "20px" }} htmlFor="username" className="login-label">Username</label>
            <input
                type="text"
                name="username"
                value={loginUsername}
                placeholder="Username"
                className="login-inp"
                onChange={e => { setLoginUsername(e.target.value); setErrorMsg("") }}
            />
            <label htmlFor="password" className="login-label">Password</label>
            <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                className="login-inp"
                onChange={e => { setPassword(e.target.value); setErrorMsg("") }}
            />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login
