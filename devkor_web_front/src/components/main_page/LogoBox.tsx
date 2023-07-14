import Image from "next/image";
import styled from "styled-components";
import Logo from "../../../public/assets/img/Devkor_black.svg";

export default function LogoBox() {
    return (
        <div>
            <Image
                alt="Devkor"
                src={Logo}
                width={423}
                style={{
                    filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.35)",
                }}
            ></Image>
        </div>
    );
}
