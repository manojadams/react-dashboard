import styled from "@emotion/styled";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer/Footer";
import { ThemeProvider } from "@mui/material";
import PAGE_THEME from "../config/themes/page.theme";

const HomePage = () => {
    return (
        <ThemeProvider theme={PAGE_THEME}>
            <Wrapper>
                <Header />
                <Body />
                <Footer />
            </Wrapper>
        </ThemeProvider>
    );
}

const Wrapper = styled.div`
    max-width: 1200px;
    padding: 16px;
    margin: auto;
`;

export default HomePage;
