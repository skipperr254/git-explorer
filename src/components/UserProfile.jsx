import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
    const [gitUserData, setGitUserData] = useState(null);

    const { username } = useParams();

    useEffect(() => {
        const getGitUserData = async () => {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            // console.log(response.data)
            setGitUserData(response.data);
        }
        getGitUserData().catch(e => console.log(e));
    }, [username])

    return (
        <div className="user-profile-main-content">
            {gitUserData ? (
                <>
                    <div className="top-cont">
                        <img src={gitUserData.avatar_url} alt="User Avatar" className="user-avatar-img" />
                        <div className="name-cont">
                            <span>{gitUserData.login}</span>
                            <h2>{gitUserData.name}</h2>
                            <h3>{gitUserData.location}</h3>
                            <div className="follow-cont">
                                <span className="followers">
                                    Followers: {gitUserData.followers}
                                </span>
                                <span className="following">
                                    Following: {gitUserData.following}
                                </span>
                            </div>
                            <a
                                className="view-ongit-a"
                                href={gitUserData.html_url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                View On GitHub
                            </a>
                        </div>
                    </div>
                    <div className="bottom-cont">
                        <h3>{gitUserData.bio}</h3>
                    </div>
                </>
            ) : (
                <h1>Fecthing Data...</h1>
            )
            }
        </div>
    )
}

export default UserProfile
