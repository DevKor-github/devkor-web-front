import { ServiceBox } from "@/components/service_page/servicebox";
import { ServiceTitle } from "@/components/service_page/ServiceTitle";
import FooterContainer from "@/containers/FooterContainer";
import Header from "@/containers/Header";

const service = () => {
    return (
        <div>
            <Header />
            <ServiceTitle />
            <ServiceBox></ServiceBox>
            <FooterContainer></FooterContainer>
        </div>
    );
};
export default service;
