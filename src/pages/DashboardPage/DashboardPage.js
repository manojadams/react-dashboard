import { useRecoilState, useRecoilValue } from "recoil";
import sidebar from "./../../states/sidebar";
import { user } from "../../states/user";
import { useEffect } from "react";
import Gateway from "../../services/Gateway";
import Sidebar from "../../components/Dashboard/Sidebar";
import MainContent from "../../components/Dashboard/MainContent";
import styled from "@emotion/styled";

const DashboardPage = () => {
    const _sidebar = useRecoilValue(sidebar);
    const [userDetails, setUserDetails] = useRecoilState(user);
    useEffect(() => {
        Gateway.getUserInfo().then(res => {
            setUserDetails({
                ...userDetails,
                info: res
            });
        });
    }, []);

    return (
        <Wrapper expanded={_sidebar.expanded}>
            <Sidebar />
            <MainContent />
        </Wrapper>
    )
}

const Wrapper = styled.div`
`;

export default DashboardPage;
