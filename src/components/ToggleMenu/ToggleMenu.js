import MenuIcon from '@mui/icons-material/Menu';
import { useRecoilState } from 'recoil';
import sidebar from "../../states/sidebar";

const ToggleMenu = () => {
    const [sidebarState, setExpanded] = useRecoilState(sidebar);
    return (
        <MenuIcon style={{
            cursor: "pointer"
        }} onClick={() => {
            setExpanded({
                expanded: !sidebarState.expanded
            });
        }}/>
    )
}

export default ToggleMenu;
