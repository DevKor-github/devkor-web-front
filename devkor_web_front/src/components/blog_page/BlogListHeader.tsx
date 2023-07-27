import styled from "styled-components";
import Image from "next/image";
import dropButton from "../../../public/assets/img/dropButton.svg";
import { useState } from "react";

type listOrder = "최신순" | "인기순" | "내좋글" | "내쓴글";

const orderOptions: listOrder[] = ["최신순", "인기순", "내좋글", "내쓴글"];

export default function BlogListHeader() {
	const [order, setOrder] = useState<listOrder>("최신순");
	const [isDropOpen, setIsDropOpen] = useState<boolean>(false);

	const handleDropDownClick = (item: listOrder) => {
		setOrder(item);
		setIsDropOpen(false);
	};

	const dropdownButtons = orderOptions
		.filter((item) => item !== order)
		.map((item) => (
			<DropDownButton key={item} onClick={() => handleDropDownClick(item)}>
				{item}
			</DropDownButton>
		));

	return (
		<Container>
			<WriteButton>글쓰기</WriteButton>
			<WriteButton onClick={() => setIsDropOpen(!isDropOpen)}>
				{order}
				<RotateIcon src={dropButton} alt="button" isDropOpen={isDropOpen} />
				{isDropOpen && <DropDownWrapper>{dropdownButtons}</DropDownWrapper>}
			</WriteButton>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	max-width: 1100px;
	height: 65px;
	background-color: #f8f8f8;
	display: flex;
	margin: 0 auto;
	margin-top: 65px;
	justify-content: space-between;
`;

const WriteButton = styled.button`
	width: 145px;
	height: 65px;
	font-size: 24px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;
	background-color: #f8f8f8;
	color: #433b53;
	border: none;
	&:hover {
		cursor: pointer;
		color: #4205c6;
	}
`;

const DropDownWrapper = styled.div`
	position: absolute;
	width: 145px;
	display: flex;
	flex-direction: column;
	background: rgba(255, 255, 255, 0.9);
	box-shadow: -30px 30px 100px 10px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(2px);
	margin-top: 17px;
`;

const DropDownButton = styled.button`
	padding-top: 11px;
	padding-bottom: 11px;
	width: 145px;
	border: none;
	background-color: white;
	color: #433b53;
	font-size: 20px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;

	&:hover {
		cursor: pointer;
		color: #4205c6;
	}
`;

const RotateIcon = styled(Image)<{ isDropOpen: boolean }>`
	fill: #433b53;
	stroke-width: 1px;
	stroke: #433b53;
	margin-left: 24.5px;
	transform: ${(props) => (props.isDropOpen ? "rotate(180deg)" : "rotate(0deg)")};
	transition: transform 0.2s ease;
`;
