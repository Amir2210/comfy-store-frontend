import { Link, useNavigate } from "react-router-dom"
import { Navbar } from '../cmps/Navbar'
import { useState } from 'react'
import { signup, login } from '../store/actions/user.actions'
import { toast } from 'react-toastify'
function getEmptyCredentials() {
  return {
    fullname: '',
    username: '',
    password: '',
  }
}

export function CreateUser() {
  const [credentials, setCredentials] = useState(getEmptyCredentials())
  const navigate = useNavigate()

  function handleCredentialsChange(ev) {
    const field = ev.target.name
    const value = ev.target.value
    setCredentials((credentials) => ({ ...credentials, [field]: value }))
  }

  async function onSubmit(ev) {
    ev.preventDefault()
    try {
      const user = await signup(credentials)
      await login(credentials)
      toast.success(`welcome ${credentials.username} 😀`)
      navigate('/')
    } catch (err) {
      toast.error(`failed to create user try again later`)
    }
  }
  const { username, password, fullname } = credentials
  return (
    <>
      <Navbar />
      <section className='mx-4 sm:mx-auto mt-10 sm:mt-20 max-w-2xl h-2/4 flex flex-col items-center justify-center p-7 sm:shadow-2xl sm:rounded-lg text-center'>
        <h1 className='capitalize text-5xl font-semibold mb-4'>register</h1>
        <form onSubmit={onSubmit}>
          <label className="input input-bordered flex items-center gap-2 my-3 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
            <input type="text" className="grow" placeholder="Username" name='username' value={username} onChange={handleCredentialsChange} required />
          </label>
          <label className="input input-bordered flex items-center gap-2 my-3 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input type="password" className="grow" name='password' value={password} onChange={handleCredentialsChange} required />
          </label>
          <label className="input input-bordered flex items-center gap-2 my-3 w-full">
            <input type="text" className="grow" placeholder="Full name" name='fullname' value={fullname} onChange={handleCredentialsChange} required />
          </label>
          <button className='btn btn-outline btn-secondary capitalize text-2xl w-full my-6'>register</button>
          <span className='text-lg'>Already a member?<Link className='text-primary font-medium' to={'/login'}> Login</Link></span>
        </form>
      </section>
    </>
  )
}