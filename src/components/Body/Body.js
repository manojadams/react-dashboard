import styled from "@emotion/styled";
import { ZoomButton } from "../Button/Button";
import DashAnim from "../anim/dashboard";

function Body() {
    return (
        <main>
            <h1>Build superfast dashboards</h1>
            <Content>
                <DashAnim />
                <Para>Coming soon...</Para>
            </Content>
            <Footer>
                <ZoomButton variant="contained">Get started</ZoomButton>
                <ZoomButton >Github</ZoomButton>
            </Footer>
        </main>)
}

const Content = styled.div`
    text-align: center;
    padding: 12px auto;
    margin: 12px auto;
    height: 380px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    background-color: #58355Eaa;
    color: #fff;
    flex-direction: column;
`;

const Para = styled.p`
    text-align: center;
`;
const Footer = styled.div`
    display: flex;
    justify-content: center;
    gap: 24px;
`;

export default Body;
