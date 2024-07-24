import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

import React from 'react'

const Users = () => {
    const [gitUsers, setGitUsers] = useState(null);
    const navigate = useNavigate();

    const getGitUsers = async () => {
        const response = await axios.get("https://api.github.com/users?since=XXXX");
        // console.log(response.data);
        setGitUsers(response.data);
        return response.data;
    }

    useEffect(() => {
        getGitUsers().catch(e => console.log(e));
    }, [])

    return (
        <div style={{ marginTop: "50px" }}>
            {" "}
            <div className="users-cont">
                {
                    gitUsers ? gitUsers.map(user => (
                        <div key={user.id} className="user-card-cont">
                            <img
                                src={user.avatar_url}
                                alt="userAvatar"
                                className="user-avatar"
                            />
                            <span className="username">{user.login}</span>
                            <button onClick={() => navigate(`/users/user/${user.login}`)} className="view-btn">View User</button>
                        </div>
                    )) :
                        (
                            <h1>Loading...</h1>
                        )
                }
            </div>
        </div>
    )
}

export default Users
