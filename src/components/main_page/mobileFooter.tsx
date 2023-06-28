import styled from "styled-components";
import  Link  from "next/link";
function MobileFooter() {
    const content = ["서비스", "블로그", "아카이브", "깃허브"];
    return (
        <Container>
            <Menu>
                {content.map((el, i) => {
                    if (el==="서비스"){
                        return (
                            <MenuItem key={i}>
                               <Link href="/service">{el}</Link>

                            </MenuItem>
                        );
                    }
                    else if (el=="블로그"){
                        return (
                            <MenuItem key={i}>
                               <Link href="/blog">{el}</Link>

                            </MenuItem>
                        );
                    }

                    
                    else{
                    return <MenuItem key={i}>{el}</MenuItem>};
                })}
            </Menu>
        </Container>
    
    );
}

const Container = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 75px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px 10px 0 0;
    z-index: 1;
`;

const Menu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
`;

const MenuItem = styled.li`
    margin-right: 65px;
    font-size: 10px;
    color: #333;

    &:last-child {
        margin-right: 0;
    }
`;

export default MobileFooter;
