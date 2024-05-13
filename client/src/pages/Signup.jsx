import { useState } from 'react'
import { Link } from 'react-router-dom'
import close_eye from "./../assets/closed-eye.png"
import open_eye from "./../assets/visible.png"
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';



function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passImg, setPassImg] = useState(close_eye)
  const [confirmPassImg, setConfirmPassImg] = useState(close_eye)

  let passwordHandler = () => {
    if (document.getElementById('Password').type === "password") {
      document.getElementById('Password').type = "text"
      setPassImg(open_eye)
    } else {
      document.getElementById('Password').type = "password"
      setPassImg(close_eye)
    }
  }

  let confirmpasswordHandler = () => {
    if (document.getElementById('ConfirmPassword').type === "password") {
      document.getElementById('ConfirmPassword').type = "text"
      setConfirmPassImg(open_eye)
    } else {
      document.getElementById('ConfirmPassword').type = "password"
      setConfirmPassImg(close_eye)
    }
  }

  let formSubmitHandler = (event) => {

    if (document.querySelector("#Password").value !== "" && document.querySelector('#Email').value !== "" && password !== confirmPassword) {
      document.querySelector(".error-confirm-password").hidden = false;
    }
    if (document.querySelector("#Password").value == "") {
      document.querySelector(".error-password").hidden = true;
    }
    if (document.querySelector('#Email').value == "") {
      document.querySelector(".error-email").hidden = false;
    }

    // API Call to Signup the user and then redirect the use to signin-page

    event.preventDefault()
  }

  return (
    <>
      <Navbar />
      <div className='min-h-screen flex items-center justify-center bg-gray-100 '>
        <form onSubmit={formSubmitHandler} className='flex flex-col bg-white border border-black w-9/20 p-10 rounded'>
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
              <span hidden className='error-email text-red-700 font-normal text-sm mx-1'> email-id is necessary</span>
            </label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className='m-0 leading-tight shadow focus:outline-none focus:shadow-outline py-2 px-3 rounded-md' type='email' id="Email" placeholder="Email" />
          </div>
          <div className='mb-4 flex flex-col'>
            <label className='mb-2 text-gray-700 font-bold poppins-bold text-sm' htmlFor="Password">Password:
              <span hidden className='error-password text-red-700 font-normal text-sm mx-1'>Password is necessary</span>
            </label>
            <div className='flex relative items-center'>
              <input onChange={(e) => setPassword(e.target.value)} value={password} className='w-full pr-10 pl-3 leading-tight shadow focus:outline-none focus:shadow-outline py-2 px-3 rounded-md' type='password' id="Password" placeholder="Password" />
              <img onClick={passwordHandler} className='cursor-pointer absolute inset-y-0 right-1 p-2 focus:outline-none focus:shadow-outline' width="38" height="38" src={passImg} />
            </div>
          </div>
          <div className='mb-4 flex flex-col'>
            <label className='mb-2 text-gray-700 font-bold poppins-bold text-sm' htmlFor="Password">Confirm Password:
              <span hidden className='error-confirm-password text-red-700 font-normal text-sm mx-1'>Password Doesn&#39;t Match</span>
            </label>
            <div className='flex relative items-center'>
              <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} className='w-full pr-10 pl-3 leading-tight shadow focus:outline-none focus:shadow-outline py-2 px-3 rounded-md' type='password' id="ConfirmPassword" placeholder="Password" />
              <img onClick={confirmpasswordHandler} className='cursor-pointer absolute inset-y-0 right-1 p-2 focus:outline-none focus:shadow-outline' width="38" height="38" src={confirmPassImg} />
            </div>
          </div>
          <button className='focus:border-none border-none bg-blue-500 hover:bg-blue-700 w-fit px-3 py-2 rounded text-white font-bold poppins-bold' type='submit'>Sign up</button>
          <div className="flex items-center justify-center">
            <hr className="border-gray-400 w-1/2 mr-2" />
            <span className="text-gray-700 poppins-bold">OR</span>
            <hr className="border-gray-400 w-1/2 ml-2" />
          </div>
          <div>
            <p className="font-extralight">
              Already had an account than
              <Link to="/signin" className="text-blue-500 hover:underline"> signin </Link>
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Signup
