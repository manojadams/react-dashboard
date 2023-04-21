import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { user } from "../../../states/user";
import Toolbar from "./Toolbar";

const MainContent = () => {
    const userInfo = useRecoilValue(user);
    return (
        <Wrapper className="main-content">
            <Toolbar user={userInfo} />
            <Outlet />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    overflow: auto;
    background-color: #e9eaef;
    padding: 16px;
    box-sizing: border-box;
`;

export default MainContent;
