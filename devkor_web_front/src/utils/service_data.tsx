import Image from "next/image";
import logo_kudog1 from "../../public/assets/img/logo_kudog.svg";
import meezzlelogo from "../../public/assets/img/meezzle_logo.svg";
import { StaticImageData } from "next/image";

type ServiceData = {
    img: StaticImageData;
    serviceName: string;
    content: string;
    serviceURL: string;
    githubURL: string;
};
const ServiceData = [
    [
        logo_kudog1,
        "Kudog",
        "교내 공지사항들을 편하게 모아보고, 메일로 구독하자. KUDOG",
        "https://www.kudog.email/",
        "https://github.com/devkor-project",
    ],
    [
        meezzlelogo,
        "Meezzle",
        "모바일에서 사용하기 편리한 모임 시간 투표 서비스, meezzle",
        "https://meezzle.xyz/",
        "https://github.com/ryuni-dev/meezzle",
    ],
];
export default ServiceData;

/*const ServiceData =[{}]*/
