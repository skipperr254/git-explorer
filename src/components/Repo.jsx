import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Repo = () => {

    const [gitRepoData, setGitRepoData] = useState();
    const [cloneCopy, setCloneCopy] = useState(false);
    const { name, username } = useParams();

    useEffect(() => {
        const getRepo = async () => {
            const response = await axios.get(`https://api.github.com/repos/${username}/${name}`);
            setGitRepoData(response.data)
        };
        getRepo().catch(e => console.log(e));
    }, [name, username]);

    return (
        <div>
            <div className="top-cont">
                {
                    gitRepoData ? (
                        <>
                            <img
                                className='avatar-img'
                                src={gitRepoData.owner.avatar_url}
                                alt={`${gitRepoData.owner.login} Avatar`}
                                style={{ width: "30%" }}
                            />
                            <div className="name-cont">
                                <span className="username">
                                    Owner: {" "}
                                    <Link to={`/users/user/${gitRepoData.owner.login}`}>{gitRepoData.owner.login}</Link>
                                </span>
                                <span className="repo-lang-span">
                                    Language: {gitRepoData.language}
                                </span>
                                <h2>{gitRepoData.name}</h2>
                                <div className="follow-cont">
                                    <a
                                        className="view-ongit-a"
                                        href={gitRepoData.html_url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        View on GitHub
                                    </a>
                                    <div>
                                        <input
                                            type="text"
                                            className="clone-url-inp"
                                            value={gitRepoData.clone_url}
                                        />
                                        <button
                                            onClick={() => {
                                                navigator.clipboard.writeText(gitRepoData.clone_url);
                                                setCloneCopy((isCopied) => !isCopied);
                                                setTimeout(() => {
                                                    setCloneCopy((isCopied) => !isCopied)
                                                }, 3000)
                                            }}
                                        >
                                            {cloneCopy ? "Copied" : "Copy"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <h1>Loading...</h1>
                    )
                }
            </div>
        </div>
    )
}

export default Repo
