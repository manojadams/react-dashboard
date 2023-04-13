import { Chip as MuiChip} from "@mui/material";
import DataTableUtil from "../../utils/DatatableUtil";
import { useEffect, useState } from "react";

const Cell = (props) => {
    const type = props.type;
    switch (type) {
        case "chip":
            return ( <Chip 
                label={getValueDisplay(props)} 
                value={props.data}
                options={props.options}
            />);
        default:
            return getValueDisplay(props);
    }
}

const getValueDisplay = (props) => {
    const datatype = typeof props.data;
    switch (datatype) {
        case 'boolean':
            return props.data ? "True" : "False"
        default: 
            return DataTableUtil.getValue(props.type, props.data);
    }
}

const Chip = (props) => {
    const [chipProps, setChipProps] = useState({
        color: "primary",
        variant: "outlined"
    });
    useEffect(() => {
        const options = props.options || [];
        const match = options.find(o => o.value === props.value);
        setChipProps({
            color: match ? match.color : "primary",
            variant: match ? match.variant : "outlined"
        });
    }, [props.options, props.value]);
    return (<MuiChip 
        label={props.label} 
        size="small"
        variant={chipProps.variant}
        color={chipProps.color}
    />)
}

export default Cell;