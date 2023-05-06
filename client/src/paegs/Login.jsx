import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false);
    const {setUser} = useContext(UserContext);

    async function handleSubmit(e) {
        e.preventDefault();
        try{
            const {data} = await axios.post('/login', {email, password});
            setUser(data);
            alert('Logged in successfully!')
            setRedirect(true);
        }catch(e) {
            alert('Login failed')
        }
    }

    if(redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <div className="mt-2 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                    <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email} 
                    onChange={e=>setEmail(e.target.value)}
                    />
                    <input 
                    type="password" 
                    placeholder="Enter your password" 
                    value={password} 
                    onChange={e=>setPassword(e.target.value)}
                    />
                    <button className="primary">Login</button>
                    <div className="py-2 text-center text-gray-500">
                        Don't have an account? <Link className="underline text-black" to={'/register'}>Register now</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}