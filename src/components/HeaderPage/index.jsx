import { useState } from "react"
import { Link, useNavigate,  } from "react-router-dom"

function HeaderPage({link}) {
    const [query, setQuery ] = useState("")
    const navigate = useNavigate()

    const HandleSearch = (e) => {
         e.preventDefault()
         if(query === "") {
            console.log("Your keyword still empty")
            navigate(link)
         } else {
            navigate(`/photos/searchphoto/${query}`)
         }
    }

    return (
        <nav className="bg-white border-gray-200 sm:px-4 py-2.5 rounded sticky top-0">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <h2 className="p-3 text-2xl font-sans font-bold">
                <Link to="/">freePhoto</Link>
            </h2>

            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
               <span className="sr-only">Open main menu</span>
               <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>

            <div className="hidden w-100 md:block md:w-auto" id="navbar-default">
    
                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                    <form className="flex items-center w-1/2 m-auto"
                     onSubmit={HandleSearch}>   
                                <label htmlFor="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                        </div>
                                        <input 
                                          type="text" 
                                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          value={query}
                                          onChange={(e) => setQuery(e.target.value)}
                                          placeholder="Search" 
                                          required />
                                    </div>
                                <button type="submit" className="p-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-black dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        
                                    Search
                                </button>
                        </form>
                    
                   <li>
                      <a href="/" className="block text-lg  py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-black md:p-0 dark:text-black" aria-current="page">explore</a>
                  </li>
                   <li>
                      <a href="/" className="block text-lg  py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-black" aria-current="page">sign in</a>
                   </li>
                   <li>
                      <a href="/" className="block text-lg  py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-black" aria-current="page">log in</a>
                   </li>
                </ul>
             </div>
        </div>
    </nav>
    )
}

export default HeaderPage