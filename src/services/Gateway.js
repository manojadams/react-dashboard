import axios from "axios";
import REST_CONSTANTS from "./../common/api-constants";
import { USER_INFO } from "../common/constants";

class Gateway {

    static getConfig() {
        const USER_API_KEY = this.getUserApiKey();
        const config = {
            headers: {
                "x-api-key": USER_API_KEY
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
        const finalUrl = REST_CONSTANTS.GET_USER_CLIENTS.replace("{EMAIL}", email);
        return axios.get(finalUrl, this.getConfig());
    }

    static updateClient(client) {
        return axios.patch(REST_CONSTANTS.UPDATE_CLIENT, client, this.getConfig());
    }

    static getApps() {
        return axios.get(REST_CONSTANTS.GET_APPS, this.getConfig());
    }

    static getUserApps(email) {
        const finalUrl = REST_CONSTANTS.GET_USER_APPS.replace("{EMAIL}", email);
        return axios.get(finalUrl, this.getConfig());
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
        const finalUrl = REST_CONSTANTS.GET_USER_SUPPORT_REQUEST.replace("{EMAIL}", email);
        return axios.get(finalUrl, this.getConfig());
    }

    static updateSupportRequest(request) {
        return axios.patch(REST_CONSTANTS.UPDATE_SUPPORT_REQUEST, request, this.getConfig());
    }

    static getSupportResponse() {
        return axios.get(REST_CONSTANTS.GET_SUPPORT_RESPONSE, this.getConfig());
    }

    static getUserSupportResponse(email) {
        const finalUrl = REST_CONSTANTS.GET_USER_SUPPORT_RESPONSE.replace("{EMAIL}", email);
        return axios.get(finalUrl, this.getConfig());
    }

    static getLicenses() {
        return axios.get(REST_CONSTANTS.GET_LICENSES, this.getConfig());
    }

    static getUserLicenses(email) {
        const finalUrl = REST_CONSTANTS.GET_USER_LICENSES.replace("{EMAIL}", email);
        return axios.get(finalUrl, this.getConfig());
    }

    static updateLicense(license) {
        return axios.patch(REST_CONSTANTS.UPDATE_LICENSE, license, this.getConfig());
    }

    /**
     * 
     * @param {*} email 
     * @returns 
     */
    static getUserInfo(email) {
        const finalUrl = REST_CONSTANTS.GET_USER_INFO.replace("{EMAIL}", email);
        return axios.get(finalUrl, this.getConfig());
    }

    static getUserStats() {
        return axios.get(REST_CONSTANTS.GET_USER_STATS, this.getConfig());
    }

    static login(params, recaptcha_token) {
        const payload = {
            ...params,
            recaptcha_token,
        };
        return axios.post(REST_CONSTANTS.PROXY_LOGIN, payload, this.getConfig());
    }

    static getFile(id) {
        const finalUrl = REST_CONSTANTS.GET_FILE.replace("{ID}", id);
        return axios.get(finalUrl, this.getConfig());
    }

    static contactSupport(body, recaptcha_token) {
        const formData = {
            ...body,
            recaptcha_token
        }
        return axios.post(REST_CONSTANTS.PROXY_SUPPORT, formData, this.getConfig());
    }
}

export default Gateway;
