import { ThemeProvider } from "@mui/material";
import MetaForm from "@manojadams/metaforms-mui";
import { useEffect, useState } from "react";
import SchemaUtil from "../../../../utils/SchemaUtil";
import passwordsettings from "../../../../config/sidebar/user-settings-change-pass.json";
import { FORM_THEME } from "../../../../config/themes/dashboard.theme";
import Gateway from "../../../../services/Gateway";
import { toast } from "react-hot-toast";

const ChangePassword = (props) => {
    const [schema, setSchema] = useState();
    useEffect(() => {
        const schema = SchemaUtil.toMetaformSchema({
            row: [],
            col: passwordsettings
        });
        setSchema(schema);
    }, []);
    return (
        <ThemeProvider theme={FORM_THEME}>
            {
                schema && <MetaForm schema={schema} onSubmit={(data) => {
                    if (data.new_password !== data.new_password_confirm) {
                        toast.error("New passwords are not same")
                        return;
                    }
                    const passData = {
                        email: props.email,
                        password: data.password,
                        new_password: data.new_password
                    };
                    Gateway.changePassword(passData).then(res => {
                        toast.success("Password changed successfully");
                        props.onSuccess();
                    }).catch(err => {
                        toast.error(err?.response?.data?.message);
                    })
                }}/>
            }
        </ThemeProvider>
    )
}

export default ChangePassword;
