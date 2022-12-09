import { useState, useEffect } from "react"
import axios from "axios";

const DataApi = () => {
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

     return data
}

export default DataApi;