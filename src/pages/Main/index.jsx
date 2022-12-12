import Footer from "../../components/Footer"
import Header from "../../components/Header"
import api from "../../api/api.js"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Loading from "../Loading"
import FooterPage from "../../components/FooterPage"

function Main() {
    const [ data, setData ] = useState([])
    const [ isLoading, setLoading ] = useState(false)
    const [ query, setQuery ] = useState("")
    const navigate = useNavigate()

    const fetchData = async() => {
         try {
           setLoading(true)
           const response = await api.get('/photos')
           setData(response.data)  
         } catch (error) {
           console.log(error)
           setLoading(false)
         }
    }

    const handleSearch = (e) => {
          e.preventDefault();
          if(query === "") {
            console.log("query still empty")
            navigate(`/`)
          } else {
            navigate(`/photos/searchphoto/${query}`)
          }
    }

    useEffect(()=> {
       setTimeout(() =>{
            if (isLoading === false) {
                console.log("Loading ...")
            }
            fetchData();
       }, [2000])
    }, [isLoading])

    console.log(query)
    console.log(data)
    
    if(isLoading === false) {
        return (
            <>
               <Header/>
                       <div className="text-center my-3.5">
                            <h1 className="text-8xl font-bold m-6">freePhoto</h1>
                            <p className="text-3xl text-gray-500 m-6">find your photo or images freely</p>

                            <form 
                               className="flex items-center w-1/2 m-auto"
                               onSubmit={handleSearch}>   
                                <label htmlFor="simple-search" className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <input 
                                       type="text" 
                                       id="simple-search" 
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                       placeholder="Search" 
                                       name="query"
                                       value={query}
                                       onChange={(e) => setQuery(e.target.value)}
                                       required />
                                </div>
                                <button 
                                    type="submit" 
                                    className="p-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-black dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                > 
                                Search
                                </button>
                            </form>
                        </div>
               <Loading />
               <Footer/>
            </>
        )
    } else {
            return (
                <>
                    <Header />
                    <main className="">
                        <div className="text-center my-3.5">
                            <h1 className="text-8xl font-bold m-6">freePhoto</h1>
                            <p className="text-3xl text-gray-500 m-6">find your photo or images freely</p>

                            <form 
                               className="flex items-center w-1/2 m-auto"
                               onSubmit={handleSearch}>   
                                <label htmlFor="simple-search" className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <input 
                                       type="text" 
                                       id="simple-search" 
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                       placeholder="Search" 
                                       value={query}
                                       onChange={(e) => setQuery(e.target.value)}
                                       required />
                                </div>
                                <button 
                                    type="submit" 
                                    className="p-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-black dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                > 
                                Search
                                </button>
                            </form>
                        </div>

                        <div className="m-10 grid sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {data.map((photo, index) => 
                                    <Link to={`/photos/${photo.id}`} key={photo.id}>
                                        <div 
                                            className="cols-span-1"
                                            key={index}>
                                                <img 
                                                src={photo.urls.raw} 
                                                alt={photo.alt_description}
                                                width={photo.width}
                                                height={photo.height}/>
                                        </div>
                                    </Link>   
                            )}
                        </div>
                    </main>

                    <FooterPage />
                </>
            
            )
    }
}

export default Main