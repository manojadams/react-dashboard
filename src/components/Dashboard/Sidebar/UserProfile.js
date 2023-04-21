import { Box, List, ListItem } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from "react-router-dom";
import bottomSidebarItems from "../../../config/sidebar/bottom-sidebar.json";
import ROUTES from "../../../config/routes";
import { PAGE_ROUTES } from "../../../common/constants";

const UserProfile = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <Box sx={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                fontSize: "14px;"
            }}>
                <List className="sidebar-wrapper-bottom" sx={{
                    padding: "0",
                }}>
                    {bottomSidebarItems.map((item, idx) => {
                        return (<ListItem key={idx} className="sidebar-links-external" onClick={() => {
                            if (item.external) {
                                window.open(item.href, "_blank");
                            } else {
                                navigate(item.href);
                            }
                        }}>
                            <i className={item.icon}></i>
                            { item.label }
                        </ListItem>)
                    })}
                    <ListItem key="profile" sx={{
                        background: "#1E2224",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <div style={{
                            display: "flex",
                            gap: "12px",
                            alignItems: "center",
                            maxWidth: "180px",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }}>
                            <i className="bi bi-emoji-sunglasses"></i>
                            <span>
                            {
                                props.userDetails?.info?.name
                            }
                            </span>
                        </div>
                        <div className="d-profile-actions">
                            <div title="Settings" onClick={() => navigate(PAGE_ROUTES.DASHBOARD_EDIT_PROFILE)}>
                                <SettingsIcon />
                            </div>
                            <div title="Logout">
                                <LogoutIcon title="Logout" 
                                    style={{
                                        cursor: "pointer"
                                    }} onClick={props.logOut} /> 
                            </div>
                        </div>
                    </ListItem>
                </List>
            </Box>
        </>
    )
}

export default UserProfile;
