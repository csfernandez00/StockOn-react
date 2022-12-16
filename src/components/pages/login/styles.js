import styled from "styled-components";
import COLORS from "../../common/theme/colors";
import { Title } from "../dashboard/home/styles";

export const Background = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	margin-top: -10vh;
	margin-left: -6.2vw;
	background-image: linear-gradient(
		to bottom right,
		${COLORS.purple},
		${COLORS.pink}
	);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;
	background-size: cover;
	color: white;
	font-family: sans-serif;
	font-weight: 200;
	z-index: -1;
	@-webkit-keyframes infiniteScroll {
		0% {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}

		100% {
			-webkit-transform: translate3d(0, -1692px, 0);
			transform: translate3d(0, -1692px, 0);
		}
	}

	@keyframes infiniteScroll {
		0% {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}

		100% {
			-webkit-transform: translate3d(0, -1692px, 0);
			transform: translate3d(0, -1692px, 0);
		}
	}
`;

export const Shapes = styled.div`
	content: "";
	position: absolute;
	z-index: 2;
	left: 0;
	top: 0;
	width: 100%;
	height: 5076px;
	background-size: 100%;
	animation: 120s infiniteScroll linear infinite;
	background-repeat-x: repeat;
	background-image: url(https://cdn2.hubspot.net/hubfs/53/Pricing%202017%20Assets/marketing/Header_Circles-1.svg);
`;

export const Question = styled(Title)`
	padding-left: 0;
	margin-bottom: 0;
	margin-top: -0.5rem;
	font-size: 1rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	color: #aaa;
	font-weight: lighter;
	align-items: center;
`;
