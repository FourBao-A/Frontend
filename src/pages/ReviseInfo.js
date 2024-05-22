import styled from "styled-components"
import { Container, DetailBtnBox, InputBox, LongBtn} from "styles/styled"

import back from 'images/Back.svg';
import { useNavigate } from "react-router-dom";

function ReviseInfo(){
    const navigate=useNavigate();


    return(
        <ContainerReviseInfo>
            <DetailBtnBoxBack onClick={()=>navigate(-1)}>
                <img src={back}/>
                <h1>뒤로가기</h1>
            </DetailBtnBoxBack>
            <h1>회원정보 수정</h1>
            <LongInputBox>
                <h2>이름</h2>
                <input/>
            </LongInputBox>
            <LongInputBox>
                <h2>학번</h2>
                <input/>
            </LongInputBox>
            <LongInputBox>
                <h2>이메일</h2>
                <input/>
            </LongInputBox>
            <SubmitBtn>수정하기</SubmitBtn>
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


const DetailBtnBoxBack = styled(DetailBtnBox)`
position:absolute;
top:16px;
left:16px;
h1{
    color: #000;
    text-align: right;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
img{
    width:20px;
    height:20px;
}
`;

const SubmitBtn = styled(LongBtn)`
margin-top:60px;
`;