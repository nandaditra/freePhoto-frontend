import Header from "../../components/Header"
import signup from "../../assets/img/bg-signup.jpg"
import { Link } from "react-router-dom"
import FooterPage from "../../components/FooterPage"

function Signin() {
    return (
        <>
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="col-span-2">
                 <h1 className="text-2xl text-center font-bold m-7">Sign In</h1>
                 <div className="block shadow-lg card rounded w-10/12 m-auto text-gray-500 bg-stone-50">
                      <form className="">
                          <div className="mt-6 mx-6 pt-6">
                             <label 
                                htmlFor="username" 
                                className="">
                                    Username
                             </label><br/>
                             <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                          </div>

                          <div className="mt-6 mx-6">
                             <label 
                                htmlFor="username" 
                                className="">
                                    Email
                             </label><br/>
                             <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                          </div>

                          <div className="mt-6 mx-6">
                             <label htmlFor="pw-signin" className="">Password</label><br/>
                             <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                          </div>

                          <div className="mt-6 mx-6">
                             <label htmlFor="pw-confirm-signin" className="">Confirm Password</label><br/>
                             <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                              <div className="m-auto ml-6">
                                   Have account? <b className="text-black"><Link to="/login">Login</Link></b>
                              </div>
                              <div className="text-right">
                                  <button 
                                      type="submit" 
                                      className="m-6 px-5 py-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-black dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                      Sign In      
                                  </button>
                              </div>
                          </div>
                      </form>
                 </div>
              </div>
              <div className="col-span-3">
                 <img 
                   className="w-full" 
                   src={signup} 
                   alt="bg-signup.png"/>
              </div>
           </div>
        <FooterPage />
        </>
    )
}

export default Signin