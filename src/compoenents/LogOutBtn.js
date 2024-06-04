import styled from "styled-components";
import { FlexBox } from "styles/styled";

import logOut from 'images/LogOut.svg';
import { useNavigate } from "react-router-dom";

function LogOutBtn(){
    const navigate=useNavigate();
    const onClick_logout=()=>{
        sessionStorage.removeItem('token');
        navigate('/login');
    }
    return(
        <LogOutBox onClick={onClick_logout}>
            <img src={logOut}/>
            <LogOutText>로그아웃</LogOutText>
        </LogOutBox>
    )
}

export default LogOutBtn;

const LogOutText = styled.p``;
const LogOutBox = styled(FlexBox)`
position:absolute;
left:12px;

justify-content:center;
align-items:center;

cursor:pointer;
${LogOutText}{
color: #000;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`;

