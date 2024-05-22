import { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, FlexBox, InputBox, LongBtn, MainBoard } from "styles/styled"

import imgBlank from 'images/ImgBlank.png';

function Forms(){
    const [mode, setMode]=useState('');
    const [trade,setTrade]=useState('direct');
    const onClick_trade = (event) => {
        event.preventDefault();
        const value = event.currentTarget.value;
        if(value === 'direct')
            setTrade('direct');
        else
            setTrade('delivery');
    }

    useEffect(()=>{
        window.scroll(0,0);
        if(window.location.pathname==='forms')
            setMode('a')
        else
            setMode('r');
    },[])
    return(
        <MainBoard style={{gap:'8px'}}>
            <ContainerInput>
                <LongInputBox>
                    <h2>책 이름</h2>
                    <input/>
                </LongInputBox>
                <InputDiv>
                    <ShortInputBox>
                        <h2>저자</h2>
                        <input/>
                    </ShortInputBox>
                     <ShortInputBox>
                        <h2>저자</h2>
                        <input/>
                    </ShortInputBox>
                </InputDiv>
            </ContainerInput>

            <ContainerInput>
                <InputDiv>
                    <ShortInputBox>
                        <h2>가격</h2>
                        <input/>
                    </ShortInputBox>
                     <ShortInputBox>
                        <h2>이메일(연락수단)</h2>
                        <input/>
                    </ShortInputBox>
                </InputDiv>
                <InputDiv>
                    <ShortInputBox>
                        <h2>거래수단</h2>
                        <BtnBox>
                            <TradeBtn
                            onClick = {onClick_trade}
                            value = 'direct'
                            selected={trade==='direct'}> 직거래 </TradeBtn>
                            <TradeBtn
                            onClick={onClick_trade}
                            value = 'delivery'
                            selected={trade==='delivery'}> 택배 </TradeBtn>
                        </BtnBox>
                    </ShortInputBox>
                     <ShortInputBox>
                        <h2>거래장소</h2>
                        <input/>
                    </ShortInputBox>
                </InputDiv>
            </ContainerInput>
                
            <ContainerInput>
                <ImgInputBox>
                        <h2>이미지 첨부</h2>
                        <ImgInputBoxDiv>
                            <img src={imgBlank}/>
                            <label>
                                이미지 추가하기
                                <input 
                                style={{display:'none'}}
                                type="file"/>
                            </label>
                        </ImgInputBoxDiv>
                </ImgInputBox>
                <LongInputBox>
                    <h2>책 이름</h2>
                    <input/>
                </LongInputBox>
                <TextAreaBox>
                    <h2>기타 요청사항</h2>
                    <textarea/>
                </TextAreaBox>

                {mode==='a'
                ?
                <SubmitBtn>등록하기</SubmitBtn>
                :
                <SubmitBtn>수정하기</SubmitBtn>
                }
                
            </ContainerInput>

           
        </MainBoard>
    )
}

export default Forms

const ContainerInput = styled(Container)`
padding:28px 36px;
gap:8px;
h1{
    color: #000;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
`;

const LongInputBox=styled(InputBox)`
input{
    width: 100%;
    height: 36px;
}
`;
const ShortInputBox=styled(InputBox)`
width:50%;
input{
    width: 100%;
    height: 36px;
}
`;

const ImgInputBoxDiv=styled(FlexBox)``;
const ImgInputBox=styled(InputBox)`
${ImgInputBoxDiv}{
    position:relative;
    width:100%;
    height:154px;
    border-radius: 12px;
    border: 1px solid #DDD;
    background: #EEE;

    justify-content:center;
    align-items:center;
}
img{
    width:120px;
    height:100%;
}
label{
    position:absolute;
    top:12px;
    right:16px;

    width: 72px;
    flex-shrink: 0;
    border-radius: 4px;
    background: #98DAB2;

    color: #FFF;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    padding:4px;
}
`;
const TextAreaBox=styled(InputBox)`
textarea{
    width:100%;
    height:154px;

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
    resize:none;
}
`;

const InputDiv=styled(FlexBox)`
width:100%;
justify-content:center;
align-items:center;
gap:2%;
`;

const BtnBox = styled(FlexBox)`
width:100%;
justify-content:center;
align-items:center;
gap:2%;
`;
const TradeBtn = styled.button`
    width:49%;
    height:36px;

    border-radius: 12px;
    background: ${props=>props.selected ? '#FFC0C0' : '#EEE' };   

    color: #555;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const SubmitBtn = styled(LongBtn)`
margin-top:20px;
`;