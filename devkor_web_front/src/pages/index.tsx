//import { MainSection } from "@/containers/main_section";
//import FooterPresentation from "@/components/main_page/FooterPresentation";
import { MainSection } from "../containers/main_section";
import FooterPresentation from "../components/main_page/FooterPresentation";



export default function Home() {
    const githubUrl='https://github.com/DevKor-github/devkor-web-front/tree/main/devkor_web_front';
    const instagramUrl='https://www.instagram.com/devkor.ku/';
    return (
        <div>
            <MainSection />
            <FooterPresentation githubUrl={githubUrl} instagramUrl={instagramUrl}/>
        </div>
    );
}
