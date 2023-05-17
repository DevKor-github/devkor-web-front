import { ServiceBox } from "@/components/service_page/servicebox";
import { ServiceTitle } from "@/components/service_page/ServiceTitle";
import Header from "@/containers/Header";

const service = () => {
    return (
        <div>
            <Header />
            <ServiceTitle />
            <ServiceBox></ServiceBox>
        </div>
    );
};
export default service;
