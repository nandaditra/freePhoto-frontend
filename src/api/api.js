import axios from "axios";

     const clientID = "skvb09VUPNn_nYPUySKqfvnYAS7HWR2W_RgDYxBeIZA"
     
        axios.get('https://api.unsplash.com/photos/?client_id='+clientID)
        
export default axios.create({
  baseURL: 'https://api.unsplash.com/photos/',
})