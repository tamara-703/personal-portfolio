import {Link} from 'react-router-dom';

export default function Nav()
{
    return (
        <div className='nav-container'>
            <Link to="/" className='boxes'>Home</Link>
            <Link to="/projects" className='boxes'>Projects</Link>
            <Link to="/contact" className='boxes'>Connect</Link>
        </div>
    )
}
