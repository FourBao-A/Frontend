import styled from "styled-components"
import { Container, DetailBtnBoxBack, InputBox, LongBtn} from "styles/styled"
import {reviseInfo} from 'apis';
import back from 'images/Back.svg';
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import useLogin from "hooks/useLogin";

function ReviseInfo(){
    useLogin();
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        id:'',
        email:'',
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

    return(
        <ContainerReviseInfo>
            <DetailBtnBoxBack onClick={()=>navigate(-1)}>
                <img src={back}/>
                <p>뒤로가기</p>
            </DetailBtnBoxBack>
            <h1>회원정보 수정</h1>
            <LongInputBox>
                <h2>이름</h2>
                <input value={formData.name} name="name" onChange={handleChange}/>
            </LongInputBox>
            <LongInputBox>
                <h2>학번</h2>
                <input value={formData.id} name="id" onChange={handleChange}/>
            </LongInputBox>
            <LongInputBox>
                <h2>이메일</h2>
                <input value={formData.email} name="email" onChange={handleChange}/>
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

const LongInputBox=styled(InputBox)`
input{
    width: 100%;
    height: 36px;
}
`;


const SubmitBtn = styled(LongBtn)`
margin-top:60px;
`;