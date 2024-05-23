import { WidthBlock, Wrapper } from "../styles/styled";
import styled from "styled-components";
import logo from 'images/Favicon.png'
import {useState} from 'react';

function Login() {
    const [formData, setFormData] = useState({
        id: null,
        email:'',
        pw:''
    });
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData(prev=>({
            ...prev,
            [name]:value,
        }));
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        // 데이터 제출하는 로직 작성 해야함 
    }

    return (
        <Wrapper>
            <LoginWidthBlock>
                <LoginText>로그인</LoginText>
                <LoginForm onSubmit={handleSubmit}>
                    <LoginInput type="number" placeholder="학번" name="id" value={formData.id} on onChange={handleChange}></LoginInput>
                    <LoginInput type="email" placeholder="이메일" name="email" value={formData.email} on onChange={handleChange}></LoginInput>
                    <LoginInput type="password" placeholder="비밀번호" name="pw" value={formData.pw} on onChange={handleChange}></LoginInput>
                    <LoginBtn type="submit">로그인하기</LoginBtn>
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
    font-family: Pretendard;
`
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
    border: 1px solid #000;
    background: #FAFAFA;
    color: var(--Base-Content-Body, #404040);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-left: 14px;
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
    height: 30px;
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