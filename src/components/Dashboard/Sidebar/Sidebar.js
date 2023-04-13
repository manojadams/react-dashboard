import styled from "@emotion/styled";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ThemeProvider } from "@mui/material";
// import { Logo } from "../../../common/styled";
import { useState } from "react";
import config from "./../../../config/config.json";
import UserProfile from "./UserProfile";

import { useNavigate } from "react-router-dom";
import "./sidebar.css";
import { TABLE_THEME } from "../../../config/themes/dashboard.theme";

function Sidebar(props) {
    const [sidebarConfig] = useState(config?.theme?.sidebar);
    const navigate = useNavigate();
    return (
        <Wrapper expanded={props.expanded} position={sidebarConfig.position || "left"}>
            <ThemeProvider theme={TABLE_THEME}>
                <Drawer open={props.expanded} 
                    anchor={sidebarConfig.position || "left"}
                    variant={props.isSmallDevice ? "temporary" : "persistent"} sx={{
                        "& .MuiDrawer-paper": {
                            background: sidebarConfig.background || "var(--bg-sidebar)",
                            color: sidebarConfig.color || "var(--color-sidebar)"
                        }
                    }}
                    onClose={props.handleClose}>
                    {/* <Logo className="p-16" onClick={() => {
                        navigate("/");
                    }} /> */}
                    <Box sx={{width: 250}}>
                        <List className="sidebar-wrapper">
                            {
                                props.items.map(item => {
                                    return (
                                        <ListItem key={item.id} 
                                            disablePadding 
                                            className={props.path === item.href ? "sidebar-active": ""}
                                            sx={{
                                                backgroundColor: "#1E2224"
                                            }}
                                            >
                                            <ListItemButton onClick={() => props.handleItemClick(item.href)}>
                                                <ListItemIcon className="icon" sx={{
                                                    color: "#fff",
                                                    minWidth: "32px"
                                                }}>
                                                    {
                                                        item.icon && <i className={ item.icon }></i>
                                                    }
                                                </ListItemIcon>
                                                <ListItemText>{ item.label }</ListItemText>
                                            </ListItemButton>
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </Box>
                    <UserProfile userDetails={props.userDetails} logOut={props.logOut} />
                </Drawer>
            </ThemeProvider>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .sidebar-wrapper {
        margin: 0;
        .icon {
            color: #fff;
        }
    }
    .sidebar-active {
        background-color: #fff;
        color: #000;
        // border-radius: 10px;
        .icon {
            color: #000;
        }
    }
    .icon {
        color: #fff;
        min-width: 32px;
    }
    &[position="right"] {
        
    }
    .d-profile-actions {
        display: flex;
        flex-direction: row;
        gap: 8px;
        > * {
            cursor: pointer;
        }
    }
`;

export default Sidebar;
