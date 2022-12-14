import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import storelink from "../../redux/storelink.js"
import api from "../../api/api.js"
import Footer from "../../components/Footer"
import FooterPage from "../../components/FooterPage"
import HeaderPage from "../../components/HeaderPage"
import NotFound from "../NotFound"
import Loading from "../Loading"

function ResultSearch() {
    const [data, setData] = useState([])
    const [isLoading, setLoading ] = useState(false)
    const [error, setError] = useState(null)
    const { queryId } = useParams()
    console.log(queryId)

    const fetchData = () => {
        api.get('search/photos?query='+queryId).then((response) =>{
            setLoading(true)
            setData(response.data)
        }).catch(error => {
            setLoading(false)
            setError(error)
        })
    } 

    useEffect(()=> {
        setTimeout(()=>{
            if(isLoading === false) {
                console.log("loading...")
            }
            const linkdata = storelink
            linkdata.link = '/search/photos?query='+queryId 
            console.log(linkdata.link)
            fetchData()
        }, [1500])       
    })

    if(isLoading === false && error === null) {
        return (
            <div className="bg-white">
               <HeaderPage />
               <Loading/>
               <Footer />
            </div>
        )
    } else if(error || data.total === 0) {
        return (
            <>
              <NotFound />
            </>
        )
    } 
    else {
        return (
        <div className="bg-white">
         <HeaderPage />

         <div className="m-8">
             <h1 className="text-2xl font-bold">Result Keyword : {queryId}</h1>
             <p>Total : {data.total}</p>

             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {data.results?.map((photo, index)=> 
                    <Link to={`/photos/search/${photo.id}`} key={photo?.id}>
                        <div className="cols-span-1" key={index}>
                            <img src={photo.urls.raw} alt={photo.alt_description}/>
                        </div>
                    </Link>
                )}
             </div>

         </div>

         <FooterPage />
        </div>
    )
    }
}

export default ResultSearch