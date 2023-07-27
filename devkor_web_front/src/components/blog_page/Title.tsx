import Image from "next/image";
import DevKor_logo2 from "../../../public/assets/img/DevKor_logo2.webp";
import styled from "styled-components";
import Polygon from "../../../public/assets/img/Polygon 2.svg";
export function Title() {
	return (
		<TitleContainer>
			<Image
				style={{
					fill: "#5613e8",
					filter: "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3))",
					zIndex: 0,
					marginRight: 30,
				}}
				src={Polygon}
				alt="polygon"
				width={24}
			/>
			<Container>
				<Image style={{ marginRight: 10 }} src={DevKor_logo2} alt="Devkor" width={158} />
			</Container>
			<Container>
				<MainSectionText>소식이랑께</MainSectionText>
			</Container>
		</TitleContainer>
	);
}

const TitleContainer = styled.div`
	display: flex;
	flex-direction: row;

	align-items: center;

	height: 45px;
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;
	margin-top: 105px;

	img {
	}
`;

const MainSectionText = styled.p`
	font-family: "NanumSquare";
	font-style: normal;
	font-weight: 300;
	font-size: 40px;
	line-height: normal;
	/* identical to box height */

	color: black;

	margin-top: 0px;
`;
const Container = styled.div``;
