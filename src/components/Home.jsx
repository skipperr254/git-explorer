import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const [repos, setRepos] = useState(null);
    const getRepos = async () => {
        const response = await axios.get("https://api.github.com/search/repositories?q=XXX");
        setRepos(response.data.items);
    };

    const navigate = useNavigate();

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
                            By: <Link to={`/users/user/${repo.owner.login}`} className="repo-owner">{repo.owner.login}</Link>
                        </div>
                        <button onClick={() => navigate(`/repo/${repo.owner.login}/${repo.name}`)}>View Repo</button>
                    </div>
                )) :
                    (
                        <h1>Loading...</h1>
                    )
            }
        </div>
    )
}

export default Home
