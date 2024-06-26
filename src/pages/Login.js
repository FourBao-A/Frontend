import { WidthBlock, Wrapper } from "../styles/styled";
import styled from "styled-components";
import logo from 'images/Favicon.png'
import {useState} from 'react';
import { apiLogin } from "apis";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [loading,setLoading]=useState(false);
    const [formData, setFormData] = useState({
        //로그인 시 필요한 데이터
        id: '',
        pw:'',
        email:'',
    });
    /*
    handleChange(e): 로그인 폼의 입력 값이 변경될 때 호출, formData 상태를 업데이트
    handleSubmit(e): 로그인 버튼 클릭 시 호출, loading 상태를 true로 설정하여 로그인 요청이 진행 중임을 표시
    apiLogin(formData) API 함수를 호출하여 로그인을 시도
    API 응답에 따라:
        로그인 성공 시, 응답 헤더의 authorization 토큰을 세션 스토리지에 저장, 이메일 정보도 저장한 뒤 홈 페이지로 이동
        로그인 실패 시, 오류 메시지를 alert으로 표시, loading 상태를 false로 설정
    오류 발생 시, 오류 메시지를 alert으로 표시, loading 상태를 false로 설정
    */
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData(prev=>({
            ...prev,
            [name]:value,
        }));
    };
    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log('submit FormData',formData);
        console.log('before cookie : ',document.cookie);
        setLoading(true);
        apiLogin(formData)
        .then(response=>{
            console.log(response.data,response.headers);
            if(response.data.isSuccess){
                sessionStorage.setItem('token',response.headers.authorization);
                sessionStorage.setItem('email',formData.email);
                navigate('/');
            }
            else{
                alert(response.data.message);
                setLoading(false);
            }
        })
        .catch(error=>{
            alert(error);
            setLoading(false);
        });
    }

    return (
        <Wrapper>
            <LoginWidthBlock>
                <LoginText>로그인</LoginText>
                <LoginForm onSubmit={handleSubmit}>
                    <LoginInput type="number" placeholder="학번" name="id" value={formData.id} onChange={handleChange}></LoginInput>
                    <LoginInput type="email" placeholder="이메일" name="email" value={formData.email} onChange={handleChange}></LoginInput>
                    <LoginInput type="password" placeholder="비밀번호" name="pw" value={formData.pw} onChange={handleChange}></LoginInput>
                    
                    {loading
                    ?
                    <LoadingBtn disabled={true}>로그인 중입니다...</LoadingBtn>
                    :
                    <LoginBtn type="submit">로그인하기</LoginBtn>
                    }

                </LoginForm>
                <LoginBao>
                        <img src={logo} alt="로고"/>
                        <h1>북바오</h1>
                    </LoginBao>
            </LoginWidthBlock>
        </Wrapper>
    )

}

export default Login


const LoginWidthBlock = styled(WidthBlock)`
    background-color: white;
`;
const LoginText = styled.p`
    display: flex;
    width: 390px;
    height: 178px;
    padding-top: 145px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    color: #000;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const LoginForm = styled.form`
    display: flex;
    width: 390px;
    height: 255px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    flex-shrink: 0;
`
const LoginInput = styled.input`
    width: 320px;
    height: 46px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #BBB;
    background: #FAFAFA;
    color: var(--Base-Content-Body, #404040);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-left: 14px;
    outline:none;
    //숫자 조절 버튼 제거 
    &[type=number]::-webkit-inner-spin-button,
    &[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &[type=number] {
        -moz-appearance: textfield;
    }
    &[type=number]::-ms-clear {
        display: none;
    }
    &[type=number]::-ms-expand {
        display: none;
    }
`
const LoginBtn = styled.button`
    width: 320px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #DC143C;
    flex-shrink: 0;
    color: #FFF;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const LoadingBtn = styled.button`
    width: 320px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #AAA;
    flex-shrink: 0;
    color: #FFF;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const LoginBao = styled.div`
    display: flex;
    width: 390px;
    height: 193px;
    padding: 58px 129.669px 95.667px 129.332px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    h1{
        width: 130.999px;
        height: 39.333px;
        flex-shrink: 0;
        color: #000;
        text-align: center;
        font-size: 36px;
        font-family: BMJua;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`