import { atom, selector } from "recoil";
import { USER_INFO } from "../common/constants";
export const user = atom({
    key: "user",
    default: {
        isLoggedIn: () => {
            const userToken = sessionStorage.getItem(USER_INFO.TOKEN);
            const userEmail = sessionStorage.getItem(USER_INFO.NAME);
            return userToken && userEmail;
        },
        getEmail: () => {
            return sessionStorage.getItem(USER_INFO.EMAIL);
        },
        setUserDetails: (email, apiKey) => {
            sessionStorage.setItem(USER_INFO.EMAIL, email);
            sessionStorage.setItem(USER_INFO.TOKEN, apiKey);
        },
        clearLogin: () => {
            sessionStorage.removeItem(USER_INFO.EMAIL);
            sessionStorage.removeItem(USER_INFO.TOKEN);
        },
        info: {}
    }
});

export const userRole = selector({
    key: "user-role",
    get: ({get}) => {
        const userInfo = get(user);
        return userInfo.info?.role;
    }
});