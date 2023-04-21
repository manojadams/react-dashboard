import DataTableUtil from "./DatatableUtil";

class SchemaUtil {
    static toMetaformSchema(data) {
        const fields = data.col.filter(f => f.field !== "$")
            .sort((a,b) => {
                let val1 = a.editable ? 1 : 0;
                let val2 = b.editable ? 1 : 0;
                return val1 - val2;
            })
            .map(f => {
                let validation = f?.metadata?.validation;
                return {
                    "name": f.field,
                    "meta": {
                        "displayType": f?.metadata?.displayType || "label",
                        "displayName": f.headerName,
                        "value": DataTableUtil.getValue(f.metadata?.type, data.row[f.field]),
                        "options": f?.metadata?.options || [],
                        "displayProps": {
                            md: 6
                        },
                        validation
                    }
                }}
        );

        return {
            theme: {
                type: "mui",
                sectionLayout: "default",
                spacing: "",
                className: "",
                mui: {
                    variant: "outlined",
                    size: "small"
                }
            },
            fields
        }
    }
}

export default SchemaUtil;
