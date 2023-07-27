import Header from "@/containers/Header";
import { Title } from "@/components/blog_page/Title";
import FooterContainer from "@/containers/FooterContainer";
import BlogListHeader from "@/components/blog_page/BlogListHeader";
import TagList from "@/components/blog_page/TagList";
import styled from "styled-components";
import BlogList from "@/components/blog_page/BlogList";
const service = () => {
	return (
		<div style={{ backgroundColor: "#F8F8F8", paddingTop: 109 }}>
			<Header />
			<Title />
			<BlogListHeader />
			<Body>
				<BlogList />
				<TagList />
			</Body>
			<FooterContainer />
		</div>
	);
};
const Body = styled.div`
	width: 100%;
	max-width: 1100px;
	display: flex;
	margin: 0 auto;
	margin-top: 13px;
	padding-bottom: 93px;
`;

export default service;
