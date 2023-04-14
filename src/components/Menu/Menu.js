import styled from "@emotion/styled";
import homeconfig from "./../../config/home/home.json";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <UL>
            {
                homeconfig.menu.map(m => (
                <li key={m.id}>
                    <Link to={m.href}>{ m.label }</Link>
                </li>))
            }
        </UL>
    )
}

const UL = styled.ul`
    margin-left: auto;
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 16px;
    a {
        text-decoration: none;
    }
`;

export default Menu;
