import styled from "styled-components";
import { Container, FlexBox } from "../styles/styled"
import logo from 'images/Favicon.png'
import { useNavigate } from "react-router-dom";
import LogOutBtn from "./LogOutBtn";

function TopFixedBar(){
    const navigate=useNavigate();

    return(
        <ContainerTopFixedBar>
            <LogOutBtn/>
            
            <LogoBox onClick={()=>{navigate('/')}}>
                <img src={logo}/>
                <h1>북바오</h1>
            </LogoBox>
        </ContainerTopFixedBar>
    )
}

export default TopFixedBar

const ContainerTopFixedBar = styled(Container)`
position:fixed;
z-index:20;
width:100%;
@media screen and (min-width:450px) {
    width:388px;
}

height:60px;
border-bottom: 1px solid #DDD;
background: #FFF;
`;

const LogoBox = styled(FlexBox)`
align-items:center;
gap:4px;
cursor:pointer;
h1{
    color: #000;
    text-align: center;
    font-family: BMJua;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
`;