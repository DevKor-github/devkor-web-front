import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

export default function LoginForm() {
    const [loginFail, setLoginFail] = useState<"t" | "f">("f");

    const handleLogin = () => {
        // 임의 구현
        if (loginFail === "t") {
            setLoginFail("f");
        } else {
            setLoginFail("t");
        }
    };

    return (
        <LoginBox>
            <input className={loginFail} type="email" placeholder="이메일" />
            <input
                className={loginFail}
                type="password"
                placeholder="비밀번호"
            />
            <div>
                <p className="wrongpw">
                    {loginFail === "t" && "다시 시도하세요"}
                </p>
                <p className="findpw">비밀번호 찾기</p>
            </div>
            <button className="login" onClick={handleLogin}>
                로그인
            </button>
            <Link href={"/signup"}>
                <button className="signup">회원가입</button>
            </Link>
            <div className="social">
                <button className="google">구글로 시작하기</button>
                <button className="kakao">카카오로 시작하기</button>
            </div>
        </LoginBox>
    );
}

const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;

    & > input {
        width: 330px;
        height: 56.25px;
        margin-bottom: 6.75px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        background-color: #f8f8f8;
        padding: 1rem;
        color: #5613e8;
        font-family: "NanumSquare";

        :focus {
            outline: none;
            border: 1.5px solid #5613e8;
        }

        &.t {
            border: 1px solid #ea3535;
        }
    }

    & > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-family: "NanumSquare";
        font-weight: 300;
        font-size: 14px;
        color: #ea3535;
        .findpw {
            color: #393939;
            cursor: pointer;
            margin-bottom: 33px;
        }
    }

    & button {
        width: 329px;
        height: 56px;
        font-size: 20px;
        text-align: center;
        font-family: "NanumSquare";
        font-weight: 300;
        margin-bottom: 0.5rem;
        border: none;

        &.login {
            background-color: #5613e8;

            :hover {
                background-color: #420dc8;
            }

            :active {
                box-shadow: inset 10px 10px 5px rgba(0, 0, 0, 0.25);
            }
        }

        &.signup {
            background: #ffffff;
            color: #5613e8;
            border: 1px solid rgba(0, 0, 0, 0.3);

            :hover {
                border: 1px solid #5613e8;
            }

            :active {
                box-shadow: inset 10px 10px 5px rgba(0, 0, 0, 0.15);
            }
        }
    }

    & .social {
        display: flex;
        flex-direction: column;
        margin-top: 137px;

        & .google {
            font-family: "Roboto";
            font-weight: 300;
            font-size: 16px;
            text-align: center;
            color: #000000;
            background-color: #ffffff;
            border: 0.5px solid rgba(0, 0, 0, 0.8);
        }

        & .kakao {
            font-family: "Apple SD Gothic Neo";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #191919;
            background-color: #fee500;
        }
    }
`;
