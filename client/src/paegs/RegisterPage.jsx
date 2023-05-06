import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const RegisterPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    async function registerUser(e) {
        e.preventDefault();
            try{
            await axios.post('/register', {
                name,
                email,
                password,
            });
        }catch(e) {
            alert('Registration failed!')
        }
    }

    
  return (
    <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto" onSubmit={registerUser}>
                    <input 
                    type="text" 
                    placeholder="Enter your name" 
                    value={name} 
                    onChange={e=>setName(e.target.value)}
                    />
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
                    <button className="primary">Register</button>
                    <div className="py-2 text-center text-gray-500">
                        Already have an account? <Link className="underline text-black" to={'/login'}>Login</Link>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default RegisterPage