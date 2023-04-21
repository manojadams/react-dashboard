import styled from "@emotion/styled";
import { Card } from "@mui/material";
import homestats from "../../config/dashboard/home-stats.json";
import ToggleMenu from "../../components/ToggleMenu";

const Home = () => {

    const handleCardClick = () => {

    };
    return (
        <Wrapper>
            <ToggleMenu />
            <CardWrapper>
            {
                homestats.map((stat, idx) => {
                    return (
                        <Card key={idx} sx={{
                            width: "250px",
                            height: "100px",
                            padding: "0 16px",
                            position: "relative",
                            overflow: "visible",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}
                        onClick={() => handleCardClick(stat)}
                        >
                            <div className="stat-icon-wrapper">
                                <i className={ stat.icon } style={{
                                    color: stat.color
                                }}></i>
                            </div>
                            <CardColumn className="card-column1">
                                <span className="stat-value">
                                    { stat.value }
                                </span>
                                <h3 className="stat-label">
                                    { stat.label }
                                </h3>
                            </CardColumn>
                        </Card>
                    )
                })
            }
            </CardWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div``;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 16px;
    gap: 32px;
    justify-content: center;
    padding-bottom: 32px;
    cursor: pointer;
    .stat-label {
        text-transform: capitalize;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        color: rgb(123,128,154);
        margin: 0;
        font-size: 16px;
    }
    .stat-value {
        font-size: 32px;
        text-align: left;
    }
    .card-column-1 {
        display: flex;
        flex-direction: column;
    }
    .stat-icon-wrapper {
        justify-content: flex-end;
        align-items: center;
        display: flex;
        margin-left: 16px;
        i {
            font-size: 48px;
        }
    }
`;

const CardColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1200px) {
        align-items: flex-end!important;
        .stat-label {
            font-size: 14px;
        }
    }
`;

export default Home;
