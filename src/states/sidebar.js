import { atom } from "recoil";

const sidebar = atom({
    key: "sidebar",
    default: {
        expanded: false
    }
});

export default sidebar;