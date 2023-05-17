import Image from "next/image";
import github_mark_white1 from "../../../public/assets/img/github_mark_white1.webp";
import logo_kudog1 from "../../../public/assets/img/logo_kudog1.webp";
import meezzlelogo from "../../../public/assets/img/meezzlelogo.webp";
import Vector from "../../../public/assets/img/Vector.webp";
import styled from "styled-components";
import ServiceContainer from "@/containers/ServiceContainer";
import ServiceData from "@/utils/service_data";

export function ServiceBox() {
    return (
        <div>
            {ServiceData.map((a, i) => {
                return (
                    <ServiceContainer
                        key={i}
                        img={a[0]}
                        serviceName={a[1]}
                        content={a[2]}
                        serviceURL={a[3]}
                        githubURL={a[4]}
                    />
                );
            })}
        </div>
    );
}

const MainSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 1200px;
    height: 600px;
`;
/*
const MainContent = styled.div<{ size?: string }>`
  //width: ${(props) => (props.size === "big" ? "600px" : "200px")};//
  height: ${(props) => (props.size === "big" ? "200px" : "200px")};
  font-size: 18px;
  text-align: center;
  font-weight: 300;
  margin-right: 1.5px;
  margin-top: 40px;
  background-color: rgba(255, 255, 255, 1);
  line-height: 200px;
  font-family: "NanumSquare";
  color: black;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
  float: left;
`;*/
const MainContent = styled.div<{ size?: string }>`
    width: ${(props) => (props.size === "big" ? "60%" : "25%")};
    height: ${(props) => (props.size === "big" ? "310px" : "310px")};
    font-size: 18px;
    text-align: center;
    font-weight: 300;
    margin-right: 0px;
    margin-top: 60px;
    background-color: rgba(255, 255, 255, 1);
    line-height: 200px;
    font-family: "NanumSquare";
    color: black;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
    float: left;
`;
const Picture = styled.div`
    width: 10%;
    height: 154px;
    font-size: 18px;
    text-align: center;
    font-weight: 300;
    margin-top: 60px;
    float: left;
`;
const Description = styled.div`
    width: 33%;
    height: 200px;
    font-size: 18px;
    text-align: center;
    font-weight: 300;
    margin-right: 1.5px;
    margin-top: 40px;
    background-color: rgba(255, 255, 255, 1);
    line-height: 200px;
    font-family: "NanumSquare";
    color: black;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
    float: left;
`;
