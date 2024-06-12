import axios from 'axios';
// api를 정의하는 코드 파일 
const instance = axios.create({
    baseURL:process.env.REACT_APP_BACK_API,
    withCredentials:true,
})
// Axios 라이브러리를 사용하여 HTTP 클라이언트 인스턴스를 생성하는 부분

// 아래는 백엔드의 api 명세서에 따라 정의한 함수들
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

export const apiDelete =
    (token,id) => instance.delete('/api/v1/book/delete',{
        headers:{
            Authorization:token
        },
        params:{
            id:id
        }
    })

export const apiGetInfo =
    (token,id) => instance.get('/api/v1/book/detail',{
        headers:{
            Authorization:token
        },
        params:{
            id:id
        }
    })