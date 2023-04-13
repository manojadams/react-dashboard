import styled from "@emotion/styled";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
    return (
        <Wrapper>
            <Header />
            <Body />
            <Footer />
        </Wrapper>
    );
}

const Wrapper = styled.div`

`;

export default HomePage;
