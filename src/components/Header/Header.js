import styled from "@emotion/styled";
import Logo from "../Logo";
import Menu from "../Menu";

function Header() {
    return (
        <Wrapper>
            <Logo />
            <Menu />
        </Wrapper>
    )
}

const Wrapper = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;
`;

export default Header;
