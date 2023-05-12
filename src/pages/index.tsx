import { MainSection } from "@/containers/main_section";
import FooterContainer from "@/containers/FooterContainer";

import Header from "@/containers/Header";
import Box from "@/components/main_page/mobile_presentation";
export default function Home() {
    return (
        <div>
            <Header />
            <MainSection />
            <Box></Box>
            <FooterContainer />
            
        </div>
    );
}
