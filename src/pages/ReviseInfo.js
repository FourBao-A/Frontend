import styled from "styled-components"
import { Container, DetailBtnBoxBack, InputBox, LongBtn } from "styles/styled"
import { apiReviseEmail } from 'apis';
import back from 'images/Back.svg';
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import useLogin from "hooks/useLogin";
import { useLocation } from 'react-router-dom';

function ReviseInfo() {
    useLogin();
    const location = useLocation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({name:'', id:'', email:''});
    // 마이페이지에 필요한 데이터 값 정의 
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData(prev=>({
            ...prev,
            [name]:value,
        }));
    };
    // 토큰 값을 가지고 이름과 id는 건드리지 않고 이메일만 수정하는 요청을 서버에 보냄
    const handleSubmit = (e) => {
        e.preventDefault();
        const token=sessionStorage.getItem('token');
        let tmp = window.confirm('작성하신 이메일대로 수정하시겠습니까?')    
        
        if(tmp)
        apiReviseEmail(formData.email,token)
        .then(response=>{
            if(response.data.isSuccess){
                alert('이메일 수정이 성공적으로 완료되었습니다!');
                console.log(response.data.result);
                sessionStorage.setItem('email',formData.email)
                navigate(-1);
            }
            else{
                alert('수정 실패 | 이메일 형식을 확인해주세요!');
            }
        }
        )
        .catch(error=>{
            alert('error');
        });
    }
    // 마이페이지에서 이동 시, 이름과 id는 가져오게끔 설정
    useEffect(() => {
        setFormData({ 
            name: location.state.name,
            id: location.state.id,
            email: sessionStorage.getItem('email')
        });
    }, [location.state]);

    return (
        <ContainerReviseInfo>
            <DetailBtnBoxBack onClick={() => navigate(-1)}>
                <img src={back} />
                <p>뒤로가기</p>
            </DetailBtnBoxBack>
            <h1>회원정보 수정</h1>
            <LongInputBox>
                <h2>이름 (수정불가)</h2>
                <input style={{color:'#AAA'}} value={formData.name} name="name" disabled/>
            </LongInputBox>
            <LongInputBox>
                <h2>학번 (수정불가)</h2>
                <input style={{color:'#AAA'}} value={formData.id} name="id" disabled/>
            </LongInputBox>
            <LongInputBox>
                <h2>이메일</h2>
                <input value={formData.email} name="email" onChange={handleChange} />
            </LongInputBox>
            <SubmitBtn onClick={handleSubmit}>수정하기</SubmitBtn>
        </ContainerReviseInfo>
    )

}

export default ReviseInfo

const ContainerReviseInfo = styled(Container)`
    position:relative;

    flex-grow:1;
    padding:20px 40px;
    gap:18px;
    h1{
        color: #000;
        text-align: center;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`;

const LongInputBox = styled(InputBox)`
input{
    width: 100%;
    height: 36px;
}
`;


const SubmitBtn = styled(LongBtn)`
margin-top:60px;
`;