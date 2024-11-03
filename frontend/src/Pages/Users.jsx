import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/users')
        .then(res => setUsers(res.data))
        .catch(err => console.error(err));
    }, []);

    return (
        <div className="container">
            <button className="btn" onClick={() => navigate(-1)}>
				Go Back
			</button>
            <Link to='/newuser'>Create a User</Link>
            <div>
                <table class="table">
                    <thead>
                        <tr><th scope="col">Name</th><th scope="col">Email</th><th scope="col">Detail</th></tr>
                    </thead>
                    {users.map(user =>
                        <tr><th scope="row">{user.name}</th><td>{user.email}</td><td><Link>View Detail</Link></td></tr>
                    )}
                </table>
            </div>
        </div>
    )
}

export default Users;