import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import api from "../../api"
import Footer from "../../components/Footer"
import FooterPage from "../../components/FooterPage"
import HeaderPage from "../../components/HeaderPage"
import Loading from "../Loading"

function OverviewPhoto() {
    const [ data, setData ] = useState([])
    const [ isLoading, setLoading] = useState(false)
    const { photoId } = useParams() 
    const navigate = useNavigate()
    const photos = data.find((photo)=> photo.id === photoId) 

    const fetchData = async() => {
        try {
          setLoading(true)
          const response = await api.get()
          setData(response.data)  
        } catch (error) {
          console.log(error)
          setLoading(false)
        }
    }

    useEffect(() => {
        setTimeout(()=>{
            if(isLoading === false) {
               console.log("Loading ...")
            }
            fetchData()
         }, [2000])
    }, [isLoading])

    console.log(photos) 

    if(photos === false) {
       navigate('/notfound')
       console.log("Data is Not Found")
    } 
    
    if(isLoading === false) {
      return (
         <>
           <HeaderPage />
           <Loading />
           <Footer/>
         </>
      )
    } else
       {
        return (
            <>
              <HeaderPage/>

              <main className="">
                  <div className="m-6 grid grid-cols-10 gap-4">
                     <div className="col-span-7">
                        <img
                          className="w-full rounded-md" 
                          src={photos?.urls.raw} 
                          alt={photos?.alt_description}
                          />
                     </div>
                     <div className=" m-2 col-span-3">
                          <div className="m-auto p-2">
                              <img
                                  className="w-12 rounded-full float-left mr-3" 
                                  src={photos?.user.profile_image.medium} 
                                  alt={photos?.alt_description}
                              />
                              <h6 className="p-2 font-bold"> {photos?.user.username}</h6>   
                          </div>    

                          <div className="p-2">
                              <p> {photos?.user.bio}</p>
                              <div className="grid grid-cols-3 gap-4 mt-5 text-center text-white">
                                  <div className="cols-span-1 px-5 py-2.5 bg-green-600 rounded-full">
                                      🎪 {photos?.user.total_collections}
                                  </div>
                                  <div className="cols-span-1 px-5 py-2.5 bg-rose-600 rounded-full">
                                      ❤ {photos?.user.total_likes}
                                  </div>
                                  <div className="cols-span-1 px-5 py-2.5 bg-blue-600 rounded-full">
                                      🖼 {photos?.user.total_photos}
                                  </div>
                              </div>  
                          </div>

                          <div className="bg-stone-50 my-6">
                            <h2 className="text-center">Image Description</h2>
                            <table className="p-3 m-3 m-auto">
                                <tbody className="m-4">
                                    <tr className="">
                                       <td className="pr-40">
                                          Image Type 
                                       </td>
                                       <td className="text-right">
                                          JPEG
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="pr-40">
                                          Resolution 
                                       </td>
                                       <td className="text-right">
                                          {photos?.width}px X {photos?.height}px
                                       </td>
                                    </tr>
                                    <tr className="">
                                       <td className="pr-40">
                                          Location
                                       </td>
                                       <td className="text-right">
                                          {photos?.user.location}
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="pr-40">
                                          Fotografer
                                       </td>
                                       <td className="floar-right text-right">
                                          {photos?.user.name}
                                       </td>
                                    </tr>
                                </tbody>
                            </table>
                          </div>

                          <button 
                             type="submit"
                             className="m-2 py-3 w-full text-white bg-green-600 rounded-full">
                             Download  
                          </button>

                          <h2 className="text-center text-2xl font-bold mt-6">Related Photo</h2>
                                                           
                     </div>
                  </div>     
              </main>
              <FooterPage/>
            </>
        )
    }
}

export default OverviewPhoto