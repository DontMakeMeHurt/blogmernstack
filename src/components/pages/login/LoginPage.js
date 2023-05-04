import './index.css';
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
export default function LoginPage() {

  const [username,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  async function Login(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });

    if(response.ok) {
      setRedirect(true);
    } else {
      alert('wrong credentials')
    }
  }

  if(redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <form onSubmit={Login} className="login">
      <h1 className='login__title'>Login</h1>
      <div className="form">
        <input
          type="text"
          placeholder='Username...'
          value={username}
          onChange={e => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder='Password...'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className='button-submit'>Login</button>
      </div>
    </form>
  )
}