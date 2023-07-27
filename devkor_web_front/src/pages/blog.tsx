import FooterContainer from "@/containers/FooterContainer";
import Header from "@/containers/Header";

//import { BlogUpperPart } from "../components/blog/blog_upperpart";
import { BlogPhotoBox } from "../components/blog/photobox";
import { Blogtop } from "../containers/BlogReadContainer";
const service = () => {
  return (
    <div>
      <Header />

      <Blogtop></Blogtop>

      <FooterContainer></FooterContainer>
    </div>
  );
};
export default service;
