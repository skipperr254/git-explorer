import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [repos, setRepos] = useState(null);
    const getRepos = async () => {
        const response = await axios.get("https://api.github.com/search/repositories?q=XXX");
        setRepos(response.data.items);
    }
    useEffect(() => {
        getRepos().catch(e => console.log(e));
    }, []);

    return (
        <div className="users-cont">
            {
                repos ? repos.map(repo => (
                    <div key={repo.id} className="user-card-cont">
                        <img
                            src={repo.owner.avatar_url}
                            alt="userAvatar"
                            className="user-avatar"
                        />
                        <span className="username">{repo.name}</span>
                        <span className="repo-lang-span">Language: {repo.language}</span>
                        <div>
                            By: <button className="repo-owner">{repo.owner.login}</button>
                        </div>
                        <button>
                            <button>View Repo</button>
                        </button>
                    </div>
                )) :
                    (
                        <h1>Loading...</h1>
                    )
            }
            <Link to="/users">View Users</Link>
        </div>
    )
}

export default Home
