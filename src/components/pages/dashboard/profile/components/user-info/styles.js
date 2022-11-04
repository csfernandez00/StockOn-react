import styled from "styled-components";
import COLORS from "../../../../../common/theme/colors";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	flex: 1 1;
	box-shadow: 0 2px 10px #777;
	border-radius: 0.5rem;
`;

export const Border = styled.div`
	background: linear-gradient(
		to top right,
		${COLORS.purple} 0%,
		${COLORS.pink} 80%
	);
	width: 100%;
	height: 100%;
	border-radius: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Card = styled.div`
	width: 98%;
	height: 96%;
	background-color: #fff;
	border-radius: 0.3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
`;
