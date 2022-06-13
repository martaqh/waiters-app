import { Link } from 'react-router-dom';

const ServerUpdated = () => {
    return (
        <div>
            <h3>The data was successfully updated on server</h3>
            <Link to="/">Come back to tables</Link>
        </div>
        
    )
}

export default ServerUpdated;