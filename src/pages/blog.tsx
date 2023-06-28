
import MobileBlogPage from "@/components/main_page/mobile_blog_pre";
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

              {mobile && <MobileBlogPage />}
              </div>
      );
  };
export default service




