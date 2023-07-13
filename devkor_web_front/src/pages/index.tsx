import { MainSection } from "@/containers/main_section";
import FooterContainer from "@/containers/FooterContainer";

import Header from "@/containers/Header";
import Box from "@/components/main_page/mobile_presentation";

import { isMobile } from "react-device-detect";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobile, setMobile] = useState<boolean>(false);

<<<<<<< HEAD
    useEffect(() => {
        if (isMobile) setMobile(true);
        else setMobile(false);
    }, [isMobile]);
=======
  useEffect(() => {
    if (isMobile) setMobile(true);
  }, [isMobile]);
>>>>>>> 141545288cdbefc5552b967c8261b681d7ec94b5

  return (
    <div>
      {!mobile && (
        <div>
          <Header />
          <MainSection />
          <FooterContainer />
        </div>
      )}
      {mobile && <Box />}
    </div>
  );
}
