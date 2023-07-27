import styled from "styled-components";
import BlogItem, { BlogItemProps } from "./BlogItem";

const mockBlogItem: Omit<BlogItemProps, "author">[] = [
	{
		title: "제목임둥",
		content: "내용임둥ㅁㅍㅁ라ㅠㅏㅓㅁㅇ류ㅏㅓㅁ우룬아ㅓㅁ라ㅓㅁㄴ유라ㅓㅁㄴ유ㅏㄹㅁ뉴어ㅏㅠ머ㅏㄴㅍㅁ눈아라ㅗㅁㄴ이람ㄴ이린이길게릭레길게기기기기기기기기기기기기ㅣㄱ긱기길게ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ",
		date: "2021.09.09",
		like: 10,
		comment: 10,
		tags: ["태그임둥", "태그임둥", "태그임둥"],
		img: "https://picsum.photos/200",
		viewCount: 10,
	},
	{
		title: "제목임둥",
		content: "내용임둥",
		date: "2021.09.09",
		like: 10,
		comment: 10,
		tags: ["태그임둥", "태그임둥", "태그임둥"],
		img: "https://picsum.photos/200",
		viewCount: 10,
	},
	{
		title: "제목임둥",
		content: "내용임둥",
		date: "2021.09.09",
		like: 10,
		comment: 10,
		tags: ["태그임둥", "태그임둥", "태그임둥"],
		img: "https://picsum.photos/200",
		viewCount: 10,
	},
	{
		title: "제목임둥",
		content: "내용임둥",
		date: "2021.09.09",
		like: 10,
		comment: 10,
		tags: ["태그임둥", "태그임둥", "태그임둥"],
		img: "https://picsum.photos/200",
		viewCount: 10,
	},
	{
		title: "제목임둥",
		content: "내용임둥",
		date: "2021.09.09",
		like: 10,
		comment: 10,
		tags: ["태그임둥", "태그임둥", "태그임둥"],
		img: "https://picsum.photos/200",
		viewCount: 10,
	},
	{
		title: "제목임둥",
		content: "내용임둥",
		date: "2021.09.09",
		like: 10,
		comment: 10,
		tags: ["태그임둥", "태그임둥", "태그임둥"],
		img: "https://picsum.photos/200",
		viewCount: 10,
	},
	{
		title: "제목임둥",
		content: "내용임둥",
		date: "2021.09.09",
		like: 10,
		comment: 10,
		tags: ["태그임둥", "태그임둥", "태그임둥"],
		img: "https://picsum.photos/200",
		viewCount: 10,
	},
];

export default function BlogList() {
	const BlogItems = mockBlogItem.map((item) => (
		<BlogItem author="노정훈" {...item} key={item.title} />
	));
	return <Container>{BlogItems}</Container>;
}
const Container = styled.div`
	width: calc(100% - 217px);
	height: 793px;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	overflow-y: scroll;
	scrollbar-shadow-color: rgba(0, 0, 0, 0.25);
	&:after {
		flex: space-evenly;
		content: "";
		width: 374px;
	}
`;
