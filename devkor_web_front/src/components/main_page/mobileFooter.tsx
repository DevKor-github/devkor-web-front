import { ReactNode } from "react";
import styled from "styled-components";

function MobileFooter() {
    return (
        <Container>
            <Menu>
                <MenuItem>서비스</MenuItem>
                <MenuItem>블로그</MenuItem>
                <MenuItem>아카이브</MenuItem>
                <MenuItem>깃허브</MenuItem>
            </Menu>
        </Container>
    );
}

const MobileView = styled.menu`
    position: fixed;
    height: 50px;
    background-color: #f5f5f5;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Menu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
`;

const MenuItem = styled.li`
    margin-right: 20px;
    font-size: 16px;
    font-weight: bold;
    color: #333;

    &:last-child {
        margin-right: 0;
    }
`;

export default MobileFooter;
