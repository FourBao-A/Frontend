import { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, FlexBox, InputBox, LongBtn, MainBoard } from "styles/styled"

import imgBlank from 'images/ImgBlank.png';
import s3Upload, { uploadS3 } from "utils/uploadS3";
import { useLocation } from "react-router-dom";

function Forms(){
    const location = useLocation();
    const [mode, setMode]=useState('');
    const [trade,setTrade]=useState('direct');
    const [bookInfo, setBookInfo]=useState({
        name:"",
        author:"",
        publisher:"",
        price:'',
        email:"",
        dealWay:"DIRECT",
        place:"",
        thumbnail:"",
        state:"",
        askFor:""
    });
    const onClick_trade = (event) => {
        event.preventDefault();
        const value = event.currentTarget.value;
        if(value === 'direct'){
            setTrade('direct');
            setBookInfo(prev=>({...prev,dealWay:"DIRECT"}))
        }
        else{
            setTrade('delivery');
            setBookInfo(prev=>({...prev,dealWay:"DELIVERY"}))
        }
    }


    const onChange_forms = (event) => {
        const {name,value}=event.currentTarget;

        setBookInfo(prev=>({
            ...prev,
            [name]:value
        }))
    }

    const onChange_image = (event) => {
        const files = event.currentTarget.files;

        if(files){
            console.log('files[0] : ',files[0])
            uploadS3(files[0])
            .then(src=>{
                setBookInfo((prev)=>({...prev,thumbnail:src}))
                console.log(src);
            })
            .catch(error=>console.log(error));
        }
    }

    useEffect(()=>{
        window.scrollTo(0,0);
        const paths=window.location.pathname.split('/');
        console.log(paths);
        if(paths[paths.length-1]==='forms')
            setMode('a')
        else
            setMode('r');
    },[location.pathname])


    console.log(bookInfo);
    return(
        <MainBoard style={{gap:'8px'}}>
            <ContainerInput>
                <LongInputBox>
                    <h2>책 이름</h2>
                    <input 
                    name = 'name'
                    value = {bookInfo.name} 
                    onChange={onChange_forms}/>
                </LongInputBox>
                <InputDiv>
                    <ShortInputBox>
                        <h2>저자</h2>
                        <input 
                        name = 'author'
                        value = {bookInfo.author} 
                        onChange={onChange_forms}/>
                    </ShortInputBox>
                     <ShortInputBox>
                        <h2>출판사</h2>
                        <input 
                        name='publisher'
                        value={bookInfo.publisher}
                        onChange={onChange_forms}/>
                    </ShortInputBox>
                </InputDiv>
            </ContainerInput>

            <ContainerInput>
                <InputDiv>
                    <ShortInputBox>
                        <h2>가격</h2>
                        <input 
                        name = 'price'
                        type="number"
                        value={bookInfo.price} 
                        onChange={onChange_forms}/>
                    </ShortInputBox>
                     <ShortInputBox>
                        <h2>이메일(연락수단)</h2>
                        <input 
                        name='email'
                        value={bookInfo.email} 
                        onChange={onChange_forms}/>
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
                        <input 
                        name='place'
                        value={bookInfo.place} 
                        onChange={onChange_forms}/>
                    </ShortInputBox>
                </InputDiv>
            </ContainerInput>
                
            <ContainerInput>
                <ImgInputBox>
                        <h2>이미지 첨부</h2>
                        <ImgInputBoxDiv>
                            <img src={bookInfo.thumbnail ? bookInfo.thumbnail : imgBlank}/>
                            <label>
                                이미지 추가하기
                                <input 
                                style={{display:'none'}}
                                type="file"
                                accept="image/*"
                                onChange={onChange_image}/>
                            </label>
                        </ImgInputBoxDiv>
                </ImgInputBox>
                <LongInputBox>
                    <h2>책 상태</h2>
                    <input 
                    name='state'
                    value={bookInfo.state} 
                    onChange={onChange_forms}/>
                </LongInputBox>
                <TextAreaBox>
                    <h2>기타 요청사항</h2>
                    <textarea 
                    name='askFor'
                    value={bookInfo.askFor} 
                    onChange={onChange_forms}/>
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

    cursor:pointer;
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