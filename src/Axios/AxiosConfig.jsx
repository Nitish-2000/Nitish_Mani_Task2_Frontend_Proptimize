import axios from 'axios'

const Appservices = axios.create({
    baseURL : `${import.meta.env.VITE_DB_URL}`,
    headers:{
        'content-type':'application/json'
    }
}
)
Appservices.interceptors.response.use(config=>{
        let token = sessionStorage.getItem('token')
        if(token)                       
        config.headers.Authorization = 'Bearer ${token}'
    return config
})

export default Appservices;