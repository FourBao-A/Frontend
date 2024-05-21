import { Outlet } from "react-router-dom";
import TopFixedBar from "../compoenents/TopFixedBar";
import { BottomFixedBarBlank, TopFixedBarBlank, WidthBlock, Wrapper } from "../styles/styled";
import BottomFixedBar from "compoenents/BottomFixedBar";

function Root(){
    return (
        <Wrapper>
            <WidthBlock>
                <TopFixedBar/>
                <TopFixedBarBlank/>
                <Outlet/>
                <BottomFixedBarBlank/>
                <BottomFixedBar/>
            </WidthBlock>
        </Wrapper>
    )
}

export default Root