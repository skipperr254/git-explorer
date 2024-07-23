import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <h1>404 Page Not Found</h1>
            <p>Sorry, the page you are looking for could not be found</p>
            <p>
                Go back to the
                <Link to="/"> Home Page</Link>
            </p>
        </div>
    )
}

export default NotFound
