import Footer from "../../components/Footer"
import Header from "../../components/Header"
import axios from "axios"
import { useEffect, useState } from "react"

function Main() {
    const [ data, setData ] = useState([])
    const clientID = "skvb09VUPNn_nYPUySKqfvnYAS7HWR2W_RgDYxBeIZA"
    
    const fetchData = async() => {
         try {
           const response = await axios.get('https://api.unsplash.com/photos/?client_id='+clientID)
           setData(response.data)  
         } catch (error) {
           console.log(error)
         }
    }

    useEffect(()=> {
       fetchData();
    }, [])

    console.log(data)
    
    return (
        <>
            <Header />

            <main className="">
                <div className="text-center my-3.5">
                    <h1 className="text-8xl font-bold m-6">freePhoto</h1>
                    <p className="text-3xl text-gray-500 m-6">find your photo or images freely</p>

                    <form class="flex items-center w-1/2 m-auto">   
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                        </div>
                        <button type="submit" class="p-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-black dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            
                           Search
                        </button>
                    </form>
                </div>

                <div className="m-10 grid grid-cols-4 gap-4">
                    {data.map((photo, index) => 
                        <div 
                           className="cols-span-1"
                           key={index}>
                            <img 
                              src={photo.urls.raw} 
                              alt={photo.alt_description}
                              width={photo.width}
                              height={photo.height}/>
                        </div>   
                     )}
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Main