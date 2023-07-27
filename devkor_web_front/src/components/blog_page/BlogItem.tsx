import styled from "styled-components";
import blogSample from "../../../public/assets/img/blogSample.png";
import Image from "next/image";
import heart from "../../../public/assets/img/heart.svg";
export interface BlogItemProps {
	title: string;
	content: string;
	date: string;
	like: number;
	comment: number;
	tags: string[];
	img: string;
	viewCount: number;
	author: string;
}

export default function BlogItem({
	title,
	content,
	date,
	like,
	comment,
	tags,
	img,
	viewCount,
	author,
}: BlogItemProps) {
	return (
		<Wrapper>
			<Thumbnail src={blogSample} alt="sample img" />
			<Title>{title}</Title>
			<ViewCount>조회수 {viewCount}</ViewCount>
			<Reply>댓글 {comment}</Reply>
			<Content>{content}</Content>
			<TagContainer>#{tags.join(" #")}</TagContainer>
			<Divider />
			<Author>{author}</Author>
			<Date>{date}</Date>
			<LikeButton>
				<Image src={heart} alt="like button" />
			</LikeButton>
			<Likes>{like}</Likes>
		</Wrapper>
	);
}

const Thumbnail = styled(Image)`
	width: 374px;
	height: 211px;
	object-fit: cover;
`;

const Wrapper = styled.div`
	background: #fff;
	box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.25);
	width: 374px;
	height: 422px;
	flex-shrink: 0;
	margin-bottom: 50px;
	position: relative;
`;

const Title = styled.div`
	color: #000;
	position: absolute;
	top: 239px;
	left: 30px;

	font-size: 24px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;
`;

const ViewCount = styled.div`
	position: absolute;
	top: 247px;
	right: 75px;

	color: #3d3d3d;
	font-family: "NanumSquare";
	font-size: 11px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;
`;

const Reply = styled.div`
	position: absolute;
	top: 247px;
	right: 28px;

	color: #3d3d3d;
	font-family: "NanumSquare";
	font-size: 11px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;
`;

const Content = styled.div`
	position: absolute;
	top: 285px;
	left: 30px;
	height: 58px;
	width: 314px;
	overflow: hidden;
	color: #3d3d3d;
	font-family: "NanumSquare";
	font-size: 16px;
	font-style: normal;
	font-weight: 300;

	/* Set the number of lines you want to show before applying ellipsis */
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;

	/* Using JavaScript to check if content overflows and apply ellipsis */
	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		right: 0;
		padding-left: 6px;
		background: linear-gradient(to right, transparent, #fff 50%);
		pointer-events: none;
	}
`;
const TagContainer = styled.div`
	position: absolute;
	left: 30px;
	top: 352px;
	display: flex;
	color: #3d3d3d;
	font-family: "NanumSquare";
	font-size: 11px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;
`;

const Divider = styled.div`
	width: 100%;
	height: 0.3px;
	background-color: #3d3d3d;
	position: absolute;
	top: 380px;
`;

const Author = styled.div`
	position: absolute;
	top: 396px;
	left: 30px;
	color: #3d3d3d;
	font-family: "NanumSquare";
	font-size: 11px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;
`;

const Date = styled.div`
	position: absolute;
	top: 396px;
	left: 104px;
	color: #3d3d3d;
	font-family: "NanumSquare";
	font-size: 11px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;
`;

const Likes = styled.div`
	position: absolute;
	top: 396px;
	left: 333px;
	color: #3d3d3d;
	font-family: "NanumSquare";
	font-size: 11px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;
`;

const LikeButton = styled.button`
	position: absolute;
	top: 396px;
	left: 313px;
	width: 14px;
	height: 12px;
	background-color: transparent;

	&:hover {
		cursor: pointer;
	}
	img {
		margin-top: 1px;
	}
`;
