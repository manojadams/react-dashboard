import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { user } from "../../../states/user";
import Toolbar from "./Toolbar";

const MainContent = () => {
    const userInfo = useRecoilValue(user);
    return (
        <Wrapper>
            <Toolbar user={userInfo} />
            <Outlet />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: calc(100% - 250px);
    overflow: auto;
    background-color: #e9eaef;
    // padding: 16px;
`;

export default MainContent;
