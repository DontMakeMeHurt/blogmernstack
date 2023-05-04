import { useState } from 'react'

export default function RegisterPage() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  async function register(e) {
    e.preventDefault();
      const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'}
    });
    if(response.status === 200) {
      alert('registration successful');
    } else {
      alert('registration failed');
    }
  }

  return (
    <form className="login" onSubmit={register}>
      <h1 className='login__title'>Register</h1>
      <div className="form">
        <input
          type="text"
          placeholder='Username...'
          value={username}
          onChange={e => setUserName(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Password...'
        />
        <button className='button-submit'>Register</button>
      </div>
    </form>
  )
}