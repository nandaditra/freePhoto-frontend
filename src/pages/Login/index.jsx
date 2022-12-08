import Header from "../../components/Header"
import Footer from "../../components/Footer"
import login from "../../assets/img/bg-login.jpg"

function Login() {
    return (
       <>
        <Header />
           <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="col-span-2">
                 <h1 className="text-2xl text-center font-bold m-8">Login</h1>
                 <div className="block shadow-lg card rounded w-11/12 m-auto text-gray-500 bg-stone-50">
                      <form className="">
                          <div className="mt-6 mx-6 pt-6">
                             <label 
                                forName="username" 
                                className="">
                                    Username
                             </label><br/>
                             <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                          </div>

                          <div className="mt-6 mx-6">
                             <label forName="pw-login" className="">Password</label><br/>
                             <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                          </div>

                          <p className="text-right mr-4 mb-4">
                            Forget Password?
                          </p>

                          <div className="grid grid-cols-2 gap-4">
                              <div className="m-auto ml-6">
                                   Have Account? <b className="text-black">Login</b>
                              </div>
                              <div className="text-right">
                                  <button type="submit" className="m-6 px-5 py-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-black dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                              </div>
                          </div>
                      </form>
                 </div>
              </div>
              <div className="col-span-3">
                 <img 
                   className="w-full" 
                   src={login} 
                   alt="bg-login.png"/>
              </div>
           </div>
        <Footer />
       </>
    )
}

export default Login