import axios from "axios";
import REST_CONSTANTS from "./../common/api-constants";
import { USER_INFO } from "../common/constants";

class Gateway {

    static getConfig() {
        const USER_KEY = "demo";
        const config = {
            headers: {
                "user-key": USER_KEY
            }
        }
        return config;
    }

    static setUserDetails(email, apiKey) {
        sessionStorage.setItem(USER_INFO.EMAIL, email);
        this.setUserApiKey(apiKey);
    }

    static getUserToken() {
        return sessionStorage.getItem(USER_INFO.TOKEN);
    }

    static setUserToken(value) {
        sessionStorage.setItem(USER_INFO.TOKEN, value);
    }
    
    static clearLogin() {
        sessionStorage.removeItem(USER_INFO.EMAIL);
        sessionStorage.removeItem(USER_INFO.TOKEN);
    }


    static getClients() {
        return axios.get(REST_CONSTANTS.GET_CLIENTS, this.getConfig());
    }

    static getUserClients(email) {
    }

    static updateClient(client) {
        return axios.patch(REST_CONSTANTS.UPDATE_CLIENT, client, this.getConfig());
    }

    static getApps() {
        return axios.get(REST_CONSTANTS.GET_APPS, this.getConfig());
    }

    static getUserApps(email) {
    }

    static updateApp(app) {
        return axios.patch(REST_CONSTANTS.UPDATE_APP, app, this.getConfig());
    }

    static getUsers() {
        return axios.get(REST_CONSTANTS.GET_USERS, this.getConfig());
    }

    static updateUserProfile(user) {
        return axios.patch(REST_CONSTANTS.UPDATE_USER, user, this.getConfig());
    }

    static updateUser(user) {
        return axios.patch(REST_CONSTANTS.UPDATE_USER, user, this.getConfig());
    }

    static register(payload) {
        return axios.post(REST_CONSTANTS.PROXY_REGISTER, payload, this.getConfig());
    }

    static getSupportRequest() {
        return axios.get(REST_CONSTANTS.GET_SUPPORT_REQUESTS, this.getConfig());
    }

    static createSupportRequest(payload) {
        return axios.post(REST_CONSTANTS.CREATE_SUPPORT_REQUESTS, payload, this.getConfig());
    }

    static getUserSupportRequest(email) {
    }

    static updateSupportRequest(request) {
        return axios.patch(REST_CONSTANTS.UPDATE_SUPPORT_REQUEST, request, this.getConfig());
    }

    static getSupportResponse() {
        return axios.get(REST_CONSTANTS.GET_SUPPORT_RESPONSE, this.getConfig());
    }

    static getUserSupportResponse(email) {
    }

    static getLicenses() {
        return axios.get(REST_CONSTANTS.GET_LICENSES, this.getConfig());
    }

    static getUserLicenses(email) {
    }

    static updateLicense(license) {
        return axios.patch(REST_CONSTANTS.UPDATE_LICENSE, license, this.getConfig());
    }

    /**
     * 
     * @param {*} email 
     * @returns 
     */
    static getUserInfo() {
        return Promise.resolve({
            username: "demo",
            password: "demo"
        });
    }

    static getUserStats() {
    }

    static login(params, recaptcha_token) {
    }

    static contactSupport(body, recaptcha_token) {
    }
}

export default Gateway;
