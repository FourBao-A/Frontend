import styled from "styled-components";
import { Container, FlexBox } from "../styles/styled"
import logo from 'images/Favicon.png'

function TopFixedBar(){
    return(
        <ContainerTopFixedBar>
            <LogoBox>
                <img src={logo}/>
                <h1>북바오</h1>
            </LogoBox>
        </ContainerTopFixedBar>
    )
}

export default TopFixedBar

const ContainerTopFixedBar = styled(Container)`
position:fixed;
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