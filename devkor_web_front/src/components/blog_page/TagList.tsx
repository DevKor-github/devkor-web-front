import styled from "styled-components";

const mockTags = [
	{ tag: "태그임둥", count: 10 },
	{ tag: "하이", count: 10 },
	{ tag: "호이", count: 10 },
	{ tag: "ㅎㅇ", count: 10 },
];

export default function TagList() {
	const tags = mockTags.map((item) => (
		<Tag key={item.tag}>
			{item.tag} ({item.count})
		</Tag>
	));
	return (
		<TagsContainer>
			<TagTitle>태그</TagTitle>
			{tags}
		</TagsContainer>
	);
}

const TagsContainer = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 25px;
	width: 130px;
	margin-left: 87px;
	font-size: 20px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;
`;

const TagTitle = styled.div`
	color: #4205c6;
`;

const Tag = styled.button`
	border: none;
	color: #3d3d3d;
	background-color: #f8f8f8;
	font-size: 20px;
	font-style: normal;
	font-family: "NanumSquare";
	font-weight: 300;
	line-height: normal;
	&:hover {
		cursor: pointer;
		color: #4205c6;
	}
`;
