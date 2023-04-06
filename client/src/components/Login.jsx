import { useContext, useState } from "react";
import { Navigate } from 'react-router-dom';
import { UserContext } from "./UserContext";



const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUserInfo } = useContext(UserContext);


    async function login(ev) {
        ev.preventDefault();
        const response = await fetch('http://127.0.0.1:4000/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',

        });
        if (response.ok) {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            })

        }
        else {
            alert('Wrong Credentials')
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }


    return (
        <form className="form" onSubmit={login}>
            <p className="heading">Login</p>
            <input className="input"
                placeholder="Username"
                type="text"
                value={username}
                onChange={ev => setUsername(ev.target.value)} />
            <input className="input"
                placeholder="Password"
                type="text"
                value={password}
                onChange={ev => setPassword(ev.target.value)} />
            <button className="btn">Submit</button>
        </form>
    )
}

export default Login;