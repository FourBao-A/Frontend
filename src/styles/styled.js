import styled from "styled-components";

export const FlexBox = styled.div`
display:flex;
`;

export const Wrapper = styled(FlexBox)`
position:relative;

flex-direction:column;
justify-content:center;
align-items:center;
`;

export const WidthBlock = styled(FlexBox)`
position:relative;
width:100%;
@media screen and (min-width:450px) {
    width:390px;
}
min-height:100vh;
overflow-y:auto;
background-color:#EEE;

border-left : 1px solid #ddd;
border-right : 1px solid #ddd;

flex-direction:column;
justify-content:flex-start;
align-items:center;
`;

export const Container = styled(FlexBox)`
width:100%;
background-color:#FFF;

flex-direction:column;
justify-content:center;
align-items:center;
`;

export const MainBoard = styled(FlexBox)`
position:relative;
width:100%;

flex-direction:column;
justify-content:flex-start;
align-items:center;
`;

export const TopFixedBarBlank = styled(Container)`
width:100%;
@media screen and (min-width:450px) {
    width:390px;
}
height:60px;
`;

export const BottomFixedBarBlank = styled(TopFixedBarBlank)`
background-color:transparent;
`;


export const DetailList = styled(FlexBox)`
width:100%;
flex-direction:column;
justify-content:flex-start;
align-items:center;
overflow-x:hidden;

gap:2px;
p{
    margin:8px;

    color: #737373;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
`;
export const DetailTextBox = styled(FlexBox)``;
export const DetailBox = styled(Container)`
position:relative;
min-height:160px;
padding:26px;

flex-direction:row;
justify-content:flex-start;
align-items:center;
gap:16px;

img{
width:72px;
height:100px;
}
${DetailTextBox}{
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    h1{
        color: #000;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom:4px;
    }
    h2{
        color: #000;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom:2px;
    }
    h3{
        color: #000;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom:8px;
    }
    h4{
        color: #DC143C;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}
`;

export const DetailBtnBox = styled(FlexBox)`
justify-content:center;
align-items:center;
gap:2px;
cursor:pointer;
`;

export const InputBox = styled(FlexBox)`
width:100%;

flex-direction:column;
justify-content:center;
align-items:flex-start;
gap:2px;

h2{
    margin-left:8px;

    color: #555;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
input{
    flex-shrink: 0;

    color: #AAA;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 12px;
    background: #EEE;
    padding:12px;

    outline:none;
    border:none;
}
`;

export const LongBtn = styled.button`
width:100%;
height:40px;
border-radius: 8px;
background: #DC143C;

color: #FFF;
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;

display:flex;
justify-content:center;
align-items:center;
`;


export const DetailBtnBoxBack = styled(DetailBtnBox)`
position:absolute;
top:16px;
left:16px;
z-index:30;
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