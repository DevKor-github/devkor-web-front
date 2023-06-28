import { ServiceBox } from "@/components/service_page/servicebox";
import { ServiceTitle } from "@/components/service_page/ServiceTitle";
import FooterContainer from "@/containers/FooterContainer";
import Header from "@/containers/Header";

import MobileServicePage from "@/components/main_page/mobile_service";
import { isMobile } from "react-device-detect";
import { useState, useEffect } from "react";

const service = () => {

    //if mobile
    const [mobile, setMobile] = useState<boolean>(false);

    useEffect(() => {
        if (isMobile) setMobile(true);
    }, [isMobile]);

    return (
        <div>
            {!mobile && (
                <div>
            <Header />
            <ServiceTitle />
            <ServiceBox></ServiceBox>
            <FooterContainer></FooterContainer>
        </div>
            )}
            {mobile && <MobileServicePage />}
            </div>
    );
};
export default service;
