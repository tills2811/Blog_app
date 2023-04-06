import { useState } from "react";


const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    async function register(ev) {
        ev.preventDefault();
        const response = await fetch('http://127.0.0.1:4000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
            alert('Resgistered successfully');
        } else {
            alert('Registration failed');
        }

    }
    return (
        <form className="form" onSubmit={register}>
            <p className="heading">Register</p>
            <input className="input"
                placeholder="Username"
                type="text"
                value={username}
                onChange={ev => setUsername(ev.target.value)}
            />
            <input className="input"
                placeholder="Password"
                type="text"
                value={password}
                onChange={ev => setPassword(ev.target.value)}
            />
            <button className="btn">Submit</button>
        </form>
    )
}

export default Register;