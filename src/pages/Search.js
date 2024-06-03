import styled from "styled-components"
import { DetailBox, DetailBtnBox, DetailList, DetailTextBox, FlexBox, MainBoard } from "styles/styled"
import { useEffect, useState } from "react";

import searchIcon from 'images/Search.svg';
import sampleBook from 'images/SampleBook.png';
import detailNext from 'images/DetailNext.svg';
import { useNavigate } from "react-router-dom";
import { apiSearch } from "apis";

function Search(){
    const navigate = useNavigate();
    const [search,setSearch]=useState("");
    const [searchList, setSearchList]=useState([
        {
            id:2,
            name:'기초 신호 시스템',
            author:'이철희',
            publisher:'한빛 아카데미',
            price:10000,
            thumbnail:sampleBook,
            sell:"NOT_SOLD"
        },
    ])

    const fetchSearch = () => {
        apiSearch(search)
        .then(response=>{
            console.log(response.data);
            setSearchList(response.data.result);
        })
        .catch(error=>alert(error));
    }
    const onChange_search = (event) =>{
        event.preventDefault();
        setSearch(event.currentTarget.value);
    }
    useEffect(()=>{
        window.scroll(0,0);
        fetchSearch();
    },[])

    console.log('search : ',search);
    return(
        <MainDiv>
            <SearchBox>
                <input 
                value={search}
                onChange={onChange_search} 
                onKeyDown={(event)=>{
                    if(event.key=='Enter') 
                        return fetchSearch()}}
                placeholder="검색할 책 이름을 입력해주세요!"/>
                <img onClick={fetchSearch} src={searchIcon}/>
            </SearchBox>
        <MainBoard>
                <SearchBoxBlank/>
                <DetailList>
                    {searchList?.map((item,index)=>
                        <DetailBox key={item}>
                            <img src={item.thumbnail}/>
                            <DetailTextBox>
                                <h1>{item.name}</h1>
                                <h2>{item.author} 지음</h2>
                                <h3>{item.publisher}</h3>
                                <h4>{item.price.toLocaleString()}원</h4>
                            </DetailTextBox>
                            <DetailBtnBoxSearch onClick={()=>navigate(`search/${item.id}`)}>
                                <h1>상세보기</h1>
                                <img src={detailNext}/>
                            </DetailBtnBoxSearch>
                        </DetailBox>
                    )}
                    <p>
                        문의하기 : wnsgh1873@gmail.com
                    </p>
                </DetailList>
        </MainBoard>
       </MainDiv>
    )
}

export default Search

const MainDiv = styled(FlexBox)`
position:relative;
width:100%;

flex-direction:column;
justify-content:flex-start;
align-items:center;
`;

const SearchBox = styled(FlexBox)`
position:fixed;
z-index:20;
top:75px;
width:90%;
@media screen and (min-width:450px) {
    width:360px;
}
height: 46px;
flex-shrink: 0;

background-color:#FFF;

border:1px solid #AAA;
border-radius:8px;
padding-right:12px;

justify-content:space-between;
align-items:center;

input {
    width:80%;
    padding-left:12px;
    outline:none;
    border:none;

    color:#888;
    font-size:16px;
}

img{
    cursor:pointer;
}
`;
const SearchBoxBlank = styled(FlexBox)`
width:100%;
height:80px;
background-color:#FFF;
border-bottom:1px solid #ddd;
`;

const DetailBtnBoxSearch = styled(DetailBtnBox)`
position:absolute;
bottom:30px;
right:26px;
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
