import { useNavigate, useResolvedPath } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { user, userRole } from "../../../states/user";
import Util from "../../../utils/Util";
import Sidebar from "./Sidebar";
import sidebar from "../../../states/sidebar";
import Gateway from "../../../services/Gateway";
import { useMediaQuery } from "@mui/material";
import { useEffect } from "react";

const SidebarContainer = () => {
    const navigate = useNavigate();
    const path = useResolvedPath();
    const role = useRecoilValue(userRole);
    const [userDetails, setUserDetails] = useRecoilState(user);
    const isSmallDevice = useMediaQuery('(max-width:600px)');
    const [sidebarState, setExpanded] = useRecoilState(sidebar);
    const sidebarItems = Util.getSidebarItems(role);

    useEffect(() => {
        if (!isSmallDevice) {
            // disable sidebar for small device
            setExpanded({expanded: true});
        }
    }, []);
    return (
        <Sidebar 
            expanded={sidebarState.expanded} 
            isSmallDevice={isSmallDevice}
            items={sidebarItems} 
            path={path.pathname}
            userDetails={userDetails}
            handleItemClick={(location) => {
                navigate(location);
            }} 
            handleClose={() => {
                setExpanded({
                    expanded: false
                });
            }}
            logOut={() => {
                setUserDetails({
                ...userDetails,
                    info: {}
                });
                Gateway.clearLogin();
            }}/>
    )
}

export default SidebarContainer;
