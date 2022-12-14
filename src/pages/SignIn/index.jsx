import Header from "../../components/Header"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../authentication/firebase"
import { Link, useNavigate } from "react-router-dom"
import FooterPage from "../../components/FooterPage"
import { useState } from "react";
import "./signin.scss"

function Signin() {
    const navigate = useNavigate();

    const [ username, setUsername] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ repassword, setRePassword] = useState('')

    const onSubmit = async(e) => {
      e.preventDefault()

      if( password !== repassword) {
         alert("Password and RePassword don't match")
      }

      await createUserWithEmailAndPassword(auth, email, password) 
        .then((userCredential) => {
           const user = userCredential.user;
           console.log(user)
           navigate("/login")
        })
        .catch((error)=> {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
        })
    }

    return (
        <>
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sign-in">
              <div className="col-span-3 md:col-span-2 pb-20 bg-white">
                 <h1 className="text-2xl text-center font-bold m-7">Sign In</h1>
                 <div className="block shadow-lg card rounded w-10/12 m-auto text-gray-500 bg-stone-50">
                      <form className="mb-4">
                          <div className="mt-6 mx-6 pt-6">
                             <label 
                                htmlFor="username" 
                                >
                                    Username
                             </label><br/>
                             <input 
                                 type="text" 
                                 className="bg-gray-50 border border-gray-300 text-gray-900 text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-black dark:focus:border-black"
                                 value={username}
                                 onChange={(e)=> setUsername(e.target.value)}
                                 />
                          </div>

                          <div className="mt-6 mx-6">
                             <label 
                                htmlFor="email" 
                                className="">
                                    Email
                             </label><br/>
                             <input 
                                type="email" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-black dark:focus:border-black"
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
                                />
                          </div>

                          <div className="mt-6 mx-6">
                             <label htmlFor="pw-signin" className="">Password</label><br/>
                             <input 
                                type="password" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-black dark:focus:border-black"
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                                />
                          </div>

                          <div className="mt-6 mx-6">
                             <label htmlFor="pw-confirm-signin" className="">Confirm Password</label><br/>
                             <input 
                                type="password" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-black dark:focus:border-black"
                                value={repassword}
                                onChange={(e)=> setRePassword(e.target.value)}
                                />
                                
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                              <div className="m-auto ml-6">
                                   Have account? <b className="text-black"><Link to="/login">Login</Link></b>
                              </div>
                              <div className="text-right">
                                  <button 
                                      type="submit" 
                                      className="m-6 px-5 py-2.5 ml-2 text-sm font-medium text-white bg-black rounded-lg border border-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black dark:bg-black dark:hover:bg-black dark:focus:ring-black"
                                      onClick={onSubmit}>
                                      Sign In      
                                  </button>
                              </div>
                          </div>
                      </form>
                 </div>
              </div>
              <div className="col-span-3">
            
              </div>
           </div>
        <FooterPage />
        </>
    )
}

export default Signin