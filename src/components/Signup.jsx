import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer';
import Navbar from './Navbar';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passImg, setPassImg] = useState('https://img.icons8.com/windows/32/228BE6/closed-eye.png')

  const passwordHandler = () => {
    if (document.getElementById('Password').type === "password") {
      document.getElementById('Password').type = "text"
      setPassImg("https://img.icons8.com/fluency-systems-filled/48/228BE6/visible.png")
    } else {
      document.getElementById('Password').type = "password"
      setPassImg('https://img.icons8.com/windows/32/228BE6/closed-eye.png')
    }
  }

  return (
    <>
      <Navbar />
      <div className='min-h-screen flex items-center justify-center bg-gray-100 '>
        <form className='flex flex-col bg-white border border-black w-9/20 p-10 rounded'>
          <h1 className='text-2xl font-bold mr-auto mb-4'> Sign up</h1>
          <div className='flex flex-row mb-4'>
            <div className='mr-4'>
              <label className='mr-2 text-gray-700 font-bold poppins-bold text-sm' htmlFor="firstName">First Name :</label>
              <input onChange={(e) => setFirstName(e.target.value)} value={firstName} className='shadow leading-tight focus:outline-none focus:shadow-outline py-2 px-3 rounded-md' type='text' id="firstName" placeholder='First Name' />
            </div>
            <div>
              <label className='mr-2 text-gray-700 font-bold poppins-bold text-sm' htmlFor="lastName">Last Name :</label>
              <input onChange={(e) => setLastName(e.target.value)} value={lastName} className='shadow leading-tight focus:outline-none focus:shadow-outline py-2 px-3 rounded-md' type='text' id="lsatName" placeholder='Last Name' />
            </div>
          </div>
          <div className='mb-4 flex flex-col'>
            <label className='mb-2 text-gray-700 font-bold poppins-bold text-sm' htmlFor="Email">Email:
              <span hidden className='text-red-700 font-normal text-sm mx-1'> email-id is necessary</span>
            </label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className='m-0 leading-tight shadow focus:outline-none focus:shadow-outline py-2 px-3 rounded-md' type='email' id="Email" placeholder="Email" />
          </div>
          <div className='mb-4 flex flex-col'>
            <label className='mb-2 text-gray-700 font-bold poppins-bold text-sm' htmlFor="Password">Password:
              <span hidden className='text-red-700 font-normaltext-sm mx-1'>Password is necessary</span>
            </label>
            <div className='flex relative items-center'>
              <input onChange={(e) => setPassword(e.target.value)} value={password} className='w-full pr-10 pl-3 leading-tight shadow focus:outline-none focus:shadow-outline py-2 px-3 rounded-md' type='password' id="Password" placeholder="Password" />
              <img onClick={passwordHandler} className='cursor-pointer absolute inset-y-0 right-1 p-2 focus:outline-none focus:shadow-outline' width="38" height="38" src={passImg} alt="visible" />
            </div>
          </div>
          <button className='focus:border-none border-none bg-blue-500 hover:bg-blue-700 w-fit px-3 py-2 rounded text-white font-bold poppins-bold' type='submit'>Sign up</button>
          <div className="flex items-center justify-center">
            <hr className="border-gray-400 w-1/2 mr-2" />
            <span className="text-gray-700 poppins-bold">OR</span>
            <hr className="border-gray-400 w-1/2 ml-2" />
          </div>
          <div>
            <p className="font-extralight">Already had an account than <Link to="/signin" className="text-blue-500 hover:underline"> signin </Link> </p>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Signup
