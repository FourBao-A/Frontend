import styled from "styled-components"
import { Container, DetailBox, DetailBtnBox, DetailList, DetailTextBox, MainBoard } from "styles/styled"
import sampleBook from 'images/SampleBook.png';
import detailNext from 'images/DetailNext.svg';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiDelete, apiMyPage } from "apis";

function MyPage(){
    const navigate = useNavigate();
    const [historyList, setHistoryList]=useState([
        {   
            id:1,
            name:'기초 신호 시스템',
            author:'이철희',
            publisher:'한빛 아카데미',
            price:10000,
            thumbnail:sampleBook,
        },
    ])
    const [userInfo, setUserInfo]=useState([])
    
    const fetchMyPage = () => {
        const token=sessionStorage.getItem('token');
        apiMyPage(token)
        .then(response=>{
            setUserInfo({ name: response.data.result.name, id: response.data.result.id });
            setHistoryList(response.data.result.histories);
            console.log(response.data);
        })
        .catch(error=>alert(error));
    }
    const onClick_delete = (event) => {
        event.preventDefault();
        const id = Number(event.currentTarget.id);
        const token = sessionStorage.getItem('token');

        let tmp = window.confirm('해당 판매글을 삭제하시겠습니까?');
        if(tmp){
            apiDelete(token,id)
            .then(response => 
                {
                    alert(response.data.result)
                    fetchMyPage()
                })
            .catch(error=>alert(error));
        }
    }



    useEffect(()=>{fetchMyPage()},[]);

    return(
        <MainBoard>
            <ContainerInfo>
                <h1>회원정보 : <span>{userInfo.name}</span> 님 / <span>{userInfo.id}</span></h1>
                <DetailBtnBoxRevise onClick={()=>{navigate('/reviseinfo', {state:{id: userInfo.id, name: userInfo.name}})}}>
                    <h1>수정하기</h1>
                    <img src={detailNext}/>
                </DetailBtnBoxRevise>
            </ContainerInfo>
            <ContainerTitle>
                <h1>판매중인 책</h1>
            </ContainerTitle>

            <DetailList>
                    {historyList?.map((item,index)=>
                        <DetailBox key={item.id}>
                            <img src={item.thumbnail}/>
                            <DetailTextBox>
                                <h1>{item.name}</h1>
                                <h2>{item.author} 지음</h2>
                                <h3>{item.publisher}</h3>
                                <h4>{item.price.toLocaleString()}원</h4>
                            </DetailTextBox>
                            <DetailTwoBtnBox>
                                <DetailBtnBox>
                                    <DetailBtn 
                                    onClick={()=>{navigate(`/forms/${item.id}`)}}
                                    mode='revise'>수정</DetailBtn>
                                    <DetailBtn 
                                    id={item.id}
                                    onClick={onClick_delete}
                                    mode='delete'>삭제</DetailBtn>
                                </DetailBtnBox>
                            </DetailTwoBtnBox>
                        </DetailBox>
                    )}
                    <p>
                        문의하기 : wnsgh1873@gmail.com
                    </p>
                </DetailList>
        </MainBoard>
    )
}

export default MyPage

const ContainerInfo = styled(Container)`
padding:12px 16px;
margin-bottom:8px;

flex-direction:row;
justify-content:space-between;
align-items:center;
h1{
    color: #000;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    span{
        color: #FF9898;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}
`;

const ContainerTitle=styled(Container)`
margin-bottom:2px;
padding:12px;
h1{
    color: #000;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
`;

const DetailBtnBoxRevise = styled(DetailBtnBox)`
h1{
    color: #000;
    text-align: right;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
img{
    width:16px;
    height:16px;
}
`;

const DetailTwoBtnBox = styled(DetailBtnBox)`
position:absolute;
bottom:30px;
right:20px;
`;
const DetailBtn = styled.button`
width: 54px;
height: 27px;
flex-shrink: 0;
border-radius: 8px;
background: ${props=>props.mode === 'revise' ? '#98DAB2' : '#FF9898'};

color: #FFF;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;