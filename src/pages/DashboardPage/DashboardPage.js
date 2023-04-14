import { Dashboard } from "@mui/icons-material";
import PrivateRoute from "../../components/common/PrivateRoute";

const DashboardPage = () => {
    return (
        <PrivateRoute>
            <Dashboard />
        </PrivateRoute>
    )
}

export default DashboardPage;
