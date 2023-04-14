import styled from "@emotion/styled";
import LogoImg from "../../assets/images/Logo.png";

function Logo() {
    return (
        <LogoWrapper>
            <img src={LogoImg} alt="Logo" />
        </LogoWrapper>
    )
}

const LogoWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    img {
        width: 100%;
        max-width: 80px;
    }
`;

export default Logo;
