import axios from 'axios';

const instance = axios.create({
    baseURL:process.env.REACT_APP_BACK_API,
    withCredentials:true,
})

export const apiReviseEmail = (email,token) => 
    instance.patch('/api/v1/user/update-email', { email },{
        headers:{
            Authorization:token,
        }
    });

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
    (info, token) => instance.post('/api/v1/book/enroll',info,{
        headers:{
            Authorization:token
        }
    })

export const apiUpdate =
    (id, info, token) => instance.patch('/api/v1/book/update',
    {...info,id:id},
    {
        headers:{
            Authorization:token
        }
    })

export const apiMyPage =
    (token) => instance.get('/api/v1/user/mypage',{
        headers:{
            Authorization:token
        }
    })