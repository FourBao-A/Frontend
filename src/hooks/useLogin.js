import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useLogin(){
    const navigate = useNavigate();
    useEffect(()=>{
        if(!sessionStorage.getItem('token')){
            alert('로그인이 필요한 페이지입니다!')
            navigate('/login');
        }
    },[]);
}

export default useLogin;