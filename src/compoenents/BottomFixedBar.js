import { Container, FlexBox } from "styles/styled";

import home from 'images/Home.svg'
import post from 'images/Post.svg';
import myPage from 'images/MyPage.svg';
import styled from "styled-components";

function BottomFixedBar(){
    return (
        <ContainerBottomFixedBar>
            <BtnBox>
                <img src={home}/>
                <h1>홈</h1>
            </BtnBox>
            <BtnBox>
                <img src={post}/>
                <h1>등록하기</h1>
            </BtnBox>
            <BtnBox>
                <img src={myPage}/>
                <h1>마이페이지</h1>
            </BtnBox>
        </ContainerBottomFixedBar>
    )
}

export default BottomFixedBar;

const ContainerBottomFixedBar = styled(Container)`
position:fixed;
bottom:0;

display:grid;
grid-template-columns:repeat(3,1fr);

width:100%;
@media screen and (min-width:450px) {
    width:388px;
}
height:60px;

border-top: 1px solid #D9D9D9;
background: #FFF;
`;

const BtnBox = styled(FlexBox)`
flex-direction:column;
justify-content:center;
align-items:center;
h1{
color: #000;
text-align: center;
font-family: BMJua;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`;