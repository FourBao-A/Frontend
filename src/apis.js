import axios from 'axios';

const instance = axios.create({
    baseURL:process.env.REACT_APP_BACK_API,
    withCredentials:true,
})

export const apiLogin = 
    (loginInfo)=>instance.post('/api/v1/login',loginInfo);

export const apiSearch=
    (search, token) => instance.get('/api/v1/book/search',{
        params:{
            search:search
        },
        headers:{
            Authorization:token
        }
    })
export const apiEnroll =
    (info) => instance.post('/api/v1/book/enroll',info)