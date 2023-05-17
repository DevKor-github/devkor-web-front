import Image from "next/image";
import logo_kudog1 from "../../public/assets/img/logo_kudog1.webp";
import meezzlelogo from "../../public/assets/img/meezzlelogo.webp";
type ServiceData = {
  img: img;
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
    "https://www.youtube.com/watch?v=PCkiz2GUFg8&t=1418s",
    "https://github.com/DevKor-github/devkor-web-front",
  ],
  [
    meezzlelogo,
    "Meezzle",
    "모바일에서 사용하기 편리한 모임 시간 투표 서비스, meezzle",
    "https://www.naver.com/",
    "https://github.com/DevKor-github/devkor-web-front",
  ],
];
export default ServiceData;

/*const ServiceData =[{}]*/
