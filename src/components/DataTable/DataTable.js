import styled from "@emotion/styled";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider } from "@mui/material";
import { DATATABLE } from "../../common/constants";
import ActionCell from "./ActionCell";
import Cell from "./Cell";
import "./styles.css";
import DataTableUtil from "../../utils/DatatableUtil";
import { useEffect, useRef, useState } from "react";
import * as config from "../../config/tables/table.json";
import TablePagination from '@mui/material/TablePagination';
import { TABLE_THEME } from "../../common/theme";

const DataTable = (props) => {
    const [tableConfig] = useState(config.default);
    const toggleSortRef = useRef(true);
    const [rows, setRows] = useState([]);
    const [pagination, setPagination] = useState({
        page: 0,
        size: 10
    });
    const handleSort = (col) => {
        const rowsSorted = rows.sort((a,b) => {
            const str1 = a[col.field] || -1 ;
            const str2 = b[col.field] || -1;
            const compareResult = toggleSortRef.current ? str1 > str2 : str2 > str1;
            return compareResult ? 1 : -1;
        });
        setRowData([...rowsSorted]);
        toggleSortRef.current = !toggleSortRef.current;
    }
    const setRowData = (rows) => {
        const pageNum = pagination.page;
        const pageSize = pagination.size;
        const pageRows = rows.slice(pageNum * pageSize, pageNum * pageSize + pageSize);
        setRows(pageRows);
    }
    useEffect(() => {
        if (props.rows) {
            setRowData(props.rows);
        }
    }, [props.rows, pagination.page, pagination.size]);
    return (
        <Wrapper>
            <ThemeProvider theme={TABLE_THEME}>
                <TableContainer component={Paper} sx={{ maxHeight: "calc(100vh - 180px)" }}>
                    <Table className="d-table" stickyHeader aria-label="sticky table">
                        <TableHead className="d-table-head" style={{
                            background: tableConfig?.header?.background,
                            color: tableConfig?.header?.color
                        }}>
                            <TableRow>
                                {
                                    props.columns && props.columns.map((col, idx) => {
                                        return (
                                            <TableCell 
                                                className="cursor-pointer d-table-header-cell"
                                                style={{
                                                    minWidth: col.width || tableConfig.cell?.minWidth || "unset",
                                                    maxWidth: col.maxWidth || tableConfig.cell?.maxWidth || "unset",
                                                    width: col.width || tableConfig.cell?.width || "unset",
                                                    textAlign: col.align || tableConfig.cell?.align || "unset"
                                                }}
                                                key={idx} 
                                                onClick={() => handleSort(col)}>
                                                { col.headerName }
                                                <span className="m-l4"><i className="bi bi-arrow-down-up"></i></span>
                                            </TableCell>
                                        )
                                    })
                                }
                                <TableCell component="th"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                rows && rows.map((row, idx) => <TableRow key={idx}>
                                    {
                                        props.columns.map((col, idx) => <TableCell key={idx} sx={{
                                            padding: DataTableUtil.config?.spacing
                                        }} className={col.className || ""}>
                                            <div className={"d-table-cell"} style={{
                                                minWidth: col.minWidth || tableConfig?.cell?.minWidth || "unset",
                                                maxWidth: col.maxWidth || tableConfig?.cell?.maxWidth || "unset",
                                                textAlign: col.align || tableConfig.cell?.align || "unset"
                                            }}>
                                            {
                                                col.field === DATATABLE.COL_TYPE_ACTION
                                                    ? <ActionCell data={row} config={col} handleClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        props.onAction(row, col);
                                                    }}/>
                                                    : <Cell data={row[col.field]} type={col.metadata?.type} 
                                                        options={col?.metadata?.options} />
                                            }
                                            </div>
                                        </TableCell>)
                                    }
                                </TableRow>)
                            }
                        </TableBody>
                    </Table>
                    {
                        props.rows.length === 0 && <NoData />
                    }
                </TableContainer>
                <PaginationWrapper hidden={props.rows.length === 0}>
                    <TablePagination 
                            count={props.rows.length}
                            page={pagination.page}
                            rowsPerPage={pagination.size}
                            rowsPerPageOptions={[10, 20]}
                            onPageChange={(e, page) => {
                                setPagination({
                                    ...pagination,
                                    page
                                });
                            }}
                            onRowsPerPageChange={(e) => {
                                setPagination({
                                    ...pagination,
                                    page: 0,
                                    size: e.target.value
                                })
                            }}
                        />
                </PaginationWrapper>
            </ThemeProvider>
        </Wrapper>
    )
}

const NoData = () => <NoDataContainer>No Data</NoDataContainer>

const NoDataContainer = styled.div`
    text-align: center;
    margin: 32px 0;
    width: 100%;
    font-weight: bold;
`;

const Wrapper = styled.div``;

const PaginationWrapper = styled.div`
    background: #fff;
    justify-content: flex-end;
    display: ${props => props.hidden ? "none" : "flex"}
`;


export default DataTable;
