import styled from "styled-components";
import {useEffect, useState} from 'react';
import bookBlank from 'images/BookBlank.png';
import { DetailBtnBoxBack, FlexBox } from "styles/styled";
import back from 'images/Back.svg';
import { useNavigate,useParams } from "react-router-dom";
import useLogin from "hooks/useLogin";
import { apiGetInfo } from "apis";

function SearchDetail(){
    useLogin();
    const navigate = useNavigate();
    const id = useParams().id;
    const [info, setInfo]=useState({
            name:'',
            author:'',
            publisher:'',
            price:0,
            thumbnail:'',
            email:'',
            askFor:'',
            state:'',
            dealWay:'',
            place:'',
        });
    
    useEffect(()=>{
        window.scroll(0,0);
        fetchInfo();
    },[]);

    const fetchInfo = () => {
        const token = sessionStorage.getItem('token');
        apiGetInfo(token,id)
        .then(response=>{
            setInfo(response.data.result);
            console.log('apiGetInfo: ',response.data)
        })
        .catch(error=>console.log(error));
    }

    return(
        <InfoMain>
            <DetailBtnBoxBackSearch onClick={()=>navigate(-1)}>
                <img src={back}/>
                <p>뒤로가기</p>
            </DetailBtnBoxBackSearch>
            <Bookinfo>
                <img src={info.thumbnail ? info.thumbnail : bookBlank} />
                <h1>{info.name}</h1>
                <h2>{info.author} 지음</h2>
                <h3>{info.publisher}</h3>
                <h4>{info.price.toLocaleString()}원</h4>
            </Bookinfo>
            <Emailinfo>
                <h1><span>책 상태</span> : {info.state}</h1>
                <h1><span>이메일</span> : {info.email}</h1>
                <h1><span>거래방식</span> : {info.dealWay==='DIRECT' ? '직거래' : '택배'}</h1>
                {
                    info.dealWay==='DIRECT'
                    &&
                    <h1><span>거래장소</span> : {info.dealPlace} </h1>
                }
            </Emailinfo>
            <BookState>
                <p>요청사항</p>
                <StateInfo>
                    <p>{info.askFor}</p>
                </StateInfo>
            </BookState>
        </InfoMain>
    )
}

export default SearchDetail

const InfoMain = styled.div`
    width: 390px;
    flex-shrink: 0;

    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    gap:8px;
`;

const Bookinfo = styled.div`
    width: 390px;
    padding: 24px;
    padding-bottom:18px;
    background: #FFF;

    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    gap:4px;
    h1{
        color: #000;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    h2{
        color: #000;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    h3{
        color: #000;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        margin-bottom:4px;
    }
    h4{
        color: #DC143C;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    img{
        align-self:center;
        width:150px;
        height:200px;
        margin-bottom:12px;
        border-radius:8px;
    }
`;

const Emailinfo = styled(FlexBox)`
    width: 390px;
    padding: 16px 24px;
    background: #FFF;

    flex-direction:column;
    justify-content:flex-start;
    gap:4px;

    h1{
        color: #000;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        span{
            color: #DC143C;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }
`;

const BookState = styled.div`
    width: 390px;
    padding: 16px 18px;
    background: #FFF;
    align-items: center;
    justify-content: center;
    p{
        color: #000;
        font-size: 14px;
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
        color: #555;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`
const TradeInfo = styled.div`
    width:100%;
    height:100px;
    display: flex;
    justify-content:space-between;
    align-items: flex-start;
`;

const DetailBtnBoxBackSearch=styled(DetailBtnBoxBack)`
    position:relative;
    top:4px;
    left:12px;
    z-index:10;

    align-self:flex-start;
`;
