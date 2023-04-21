import Gateway from "../../../../services/Gateway";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { FORM_THEME } from "../../../../config/themes/dashboard.theme";
import Metaforms from "@manojadams/metaforms-mui";
import { useRecoilState } from "recoil";
import { user } from "../../../../states/user";
import SchemaUtil from "../../../../utils/SchemaUtil";
import usersettings from "../../../../config/sidebar/edit-profile-settings.json";
import ToggleMenu from "../../../ToggleMenu/ToggleMenu";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const EditProfile = () => {
    const [schema, setSchema] = useState();
    const [userInfo, setUserDetails] = useRecoilState(user);
    const [userData, setUserData] = useState({
        name: "",
        api_key: "",
        email: ""
    });
    useEffect(() => {
        if (userData.api_key) {
            const schema = SchemaUtil.toMetaformSchema({
                row: userData,
                col: usersettings
            });
            setSchema(schema);
        }
    }, [userData]);
    useEffect(() => {
        setUserData({
            name: userInfo.info.name,
            email: userInfo.info.email,
            api_key: userInfo.info.api_key
        })
    }, [userInfo]);

    const updateUserInfo = () => {
        Gateway.getUserInfo(userInfo.getEmail()).then(res => {
            setUserDetails({
                ...userInfo,
                info: res.data
            });
        });
    }
    return (
        <Wrapper>
            <ToggleMenu />
            <h1>Edit Profile</h1>
            {
                schema && 
                <ThemeProvider theme={FORM_THEME}>
                    <Metaforms 
                        schema={schema} 
                        buttons={{
                            submit: <Button>Change password</Button>
                        }}
                        onSubmit={(data) => {
                            // const userData = {
                            //     name: data.name,
                            //     email: data.email,
                            //     is_active: userInfo.info.is_active
                            // };
                            // Gateway.updateUserProfile(userData).then(res => {
                            //     updateUserInfo();
                            //     Util.toastSuccess("Updated profile")
                            // }).catch(error => {
                            //     toast.error("Error updating profile");
                            // })
                        }}
                    />
                </ThemeProvider>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 16px;
`;

export default EditProfile;
