import { motion } from "framer-motion";
import { Button as MuiButton } from "@mui/material";

function ZoomButton(props) {
    const {children, ...othersProps} = props;
    return (
        <MuiButton {...othersProps}
            component={motion.button}
            whileHover={{ scale: 1.1 }} 
        >
            { children }
        </MuiButton>
    )
}

export {
    ZoomButton
};
