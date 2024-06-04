import styled from "styled-components";
import {useEffect, useState} from 'react';
import sampleBook from 'images/SampleBook.png'
import { DetailBtnBoxBack, FlexBox } from "styles/styled";
import back from 'images/Back.svg';
import { useNavigate } from "react-router-dom";
import useLogin from "hooks/useLogin";

function SearchDetail(){
    useLogin();
    const navigate = useNavigate();

    const [info, setInfo]=useState({
            name:'기초 신호 시스템',
            author:'이철희',
            publisher:'한빛 아카데미',
            price:10000,
            thumbnail:sampleBook,
            email:'lee08tain@gmail.com',
            askFor:'27일 오후 이전에는 바빠요 못 만나요',
            state:'필기 흔적 없음, 책 표지 찍힘 없음',
            dealWay:'직거래',
            place:'학교 정문',
        });

    useEffect(()=>{
        window.scroll(0,0);
    },[]);

    return(
        <InfoMain>
            <DetailBtnBoxBackSearch onClick={()=>navigate(-1)}>
                <img src={back}/>
                <p>뒤로가기</p>
            </DetailBtnBoxBackSearch>
            <Bookinfo>
                <h1>{info.name}</h1>
                <h2>{info.author} 지음</h2>
                <h3>{info.publisher}</h3>
                <h4>{info.price.toLocaleString()}원</h4>
            </Bookinfo>
            <Emailinfo>
                <h1>요청사항 : {info.askFor}</h1>
                <h1>이메일 : {info.email}</h1>
            </Emailinfo>
            <BookState>
                <p>책 상태 (필기 흔적, 표지 상태 등)</p>
                <StateInfo>
                    <p>{info.state}</p>
                </StateInfo>
                <TradeInfo>
                    <img src={info.thumbnail} />
                    <TradeWay><p>{info.dealWay}</p></TradeWay>
                    <TradeWay><p>{info.place}</p></TradeWay>
                </TradeInfo>
            </BookState>
        </InfoMain>
    )
}

export default SearchDetail

const InfoMain = styled.div`
    width: 390px;
    height: 600px;
    flex-shrink: 0;

    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    gap:8px;
`;

const Bookinfo = styled.div`
    width: 390px;
    padding: 18px;
    padding-bottom:18px;
    background: #FFF;

    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    gap:4px;
    h1{
        color: #000;
        font-family: Pretendard;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    h2{
        color: #000;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    h3{
        color: #000;
        font-family: Pretendard;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        margin-bottom:4px;
    }
    h4{
        color: #DC143C;
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`

const Emailinfo = styled.div`
    width: 390px;
    height: 76px;
    padding: 17px;
    background: #FFF;
    h1{
        color: #000;
        font-family: Pretendard;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom:4px;
    }
`
const BookState = styled.div`
    width: 390px;
    height: 380px;
    padding: 8px 17px 8px 17px;
    background: #FFF;
    align-items: center;
    justify-content: center;
    p{
        color: #000;
        font-family: Pretendard;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-left:8px;
        margin-bottom:8px;
    }
`
const StateInfo = styled.div`
    width: 356px;
    height: 160px;
    border-radius: 12px;
    background: #EEE;
    padding: 12px;
    p{
        color: #000;
        font-family: Pretendard;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`
const TradeInfo = styled.div`
    width:100%;
    height: 190px;

    display: flex;
    justify-content:space-between;
    align-items: center;
    img{
        max-height: 100px;
        width: auto;
    }
`;

const TradeWay = styled.div`
    width: 99px;
    height: 36px;
    padding-top: 8px;
    border-radius:12px;

    text-align:center;
    background: #EEE;
`;


const DetailBtnBoxBackSearch=styled(DetailBtnBoxBack)`
    position:relative;
    height:100px;
    top:4px;
    left:12px;
    z-index:10;

    align-self:flex-start;
`;
