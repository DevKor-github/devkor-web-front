import { MainSection } from "@/containers/main_section";
import FooterContainer from "@/containers/FooterContainer";

import Header from "@/containers/Header";
export default function Home() {
    return (
        <div>
            <Header />
            <MainSection />
            <FooterContainer />
        </div>
    );
}
