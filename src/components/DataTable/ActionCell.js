import { Button } from "@mui/material";

const ActionCell = (props) => {
    return (
        <Button onClick={props.handleClick}>{ props.config?.metadata?.displayName }</Button>
    )
}

export default ActionCell;
