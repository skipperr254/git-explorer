import "./styles.css";
import { Outlet, Link } from "react-router-dom";

const Navbar = ({ loggedIn }) => {
    return (
        <>
            <nav>
                <Link to="/" className="logo-nav">
                    Git Explorer
                </Link>
                <div className="link-cont">
                    <Link to="/">Repos</Link>
                    <Link to="/users">Users</Link>
                    <Link to="/search">Search</Link>
                    {loggedIn || <Link to="/login">Login</Link>}
                    <Link to="/profile">Profile</Link>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;
