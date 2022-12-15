import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../authentication/firebase"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import "./login.scss"

function Login() {
    const navigate = useNavigate()
    const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password) 
      .then((userCredential)=> {
         const user = userCredential.user;
         navigate("/")
         console.log(user)
      })
      .catch((error)=> {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log(errorCode, errorMessage)
      });

    } 
    return (
       <>
        <Header />
           <div className="grid grid-cols-1 md:grid-cols-5 gap-4 login">
              <div className="col-span-3 md:col-span-2 pb-56 md:pb-64 bg-white">
                 <h1 className="text-2xl text-center font-bold m-8">Login</h1>
                 <div className="block shadow-lg card rounded w-10/12 m-auto text-gray-500 bg-stone-50">
                      <form className="">
                          <div className="mt-6 mx-6 pt-6">
                             <label 
                                htmlFor="username" 
                                className="">
                                    Username
                             </label><br/>
                             <input 
                               type="text" 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               value={email}
                               onChange={(e)=> setEmail(e.target.value)}/>
                          </div>

                          <div className="mt-6 mx-6">
                             <label htmlFor="pw-login" className="">Password</label><br/>
                             <input 
                                type="text" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}/>
                          </div>

                          <p className="text-right mr-4 mb-4">
                            Forget Password?
                          </p>

                          <div className="grid grid-cols-2 gap-4">
                              <div className="m-auto ml-6">
                                   Don't have account? <b className="text-black"><Link to="/signin">Sign In</Link></b>
                              </div>
                              <div className="text-right">
                                  <button 
                                     type="submit" 
                                     className="m-6 px-5 py-2.5 ml-2 text-sm font-medium text-white bg-black rounded-lg border border-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black dark:bg-black dark:hover:bg-black dark:focus:ring-black"
                                     onClick={onLogin}>Login</button>
                              </div>
                          </div>
                      </form>
                 </div>
              </div>
              <div className="col-span-3">
         
              </div>
           </div>
        <Footer />
       </>
    )
}

export default Login