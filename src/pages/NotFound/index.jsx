import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function NotFound() {
    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        if(query === ""){
           console.log("query is still empty")
           navigate('/notfound')
        } else {
           navigate(`/photos/searchphoto/${query}`)
        }      
    }

    return (              
         <>
            <Header />

            <main className="">
                <div className="text-center my-3.5">
                    <h1 className="text-8xl font-bold m-6">404 Not Found</h1>
                    <p className="text-3xl text-gray-500 m-6">we are sorry,but the keyword <br /> requested was not found</p>
                    <p className="text-2xl text-gray-500 m-8">Keep on, try again!</p>

                    <form 
                       className="flex items-center w-1/2 m-auto"
                       onSubmit={handleSearch}
                        >   
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input 
                               type="text" 
                               id="simple-search" 
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                               value={query}
                               onChange ={(e) => setQuery(e.target.value)}
                               placeholder="Search" 
                               required />
                        </div>
                        <button 
                           type="submit" 
                           className="p-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-black dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            
                           Search
                        </button>
                    </form>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default NotFound