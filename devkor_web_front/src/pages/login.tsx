import LogoBox from "@/components/main_page/LogoBox";
import LoginForm from "@/containers/LoginForm";
import styled from "styled-components";

export default function Login() {
    return (
        <LoginContainer>
            <LogoBox />
            <LoginForm />
        </LoginContainer>
    );
}

const LoginContainer = styled.div`
    padding-top: 86px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 120vh;
`;
