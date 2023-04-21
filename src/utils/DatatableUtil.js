import moment from "moment";
import { DEFAULT_TIMESTAMP_FORMAT, DASHBOARD_CONSTANTS } from "../common/constants";
import * as tableConfig from "../config/sidebar/table.json";

class DataTableUtil {
    static config = tableConfig.default;
    static getValue(type, value) {
        if (type) {
            switch (type) {
                case "timestamp":
                    const defaultFormat = this.getConfig(DASHBOARD_CONSTANTS.FORMAT);
                    const format = defaultFormat.timestamp || DEFAULT_TIMESTAMP_FORMAT;
                    return moment(value).format(format);
                default:
                    return value;
            }
        }
        return value;
    }
    static getConfig(param) {
        return this.config[param];
    }
}

export default DataTableUtil;
