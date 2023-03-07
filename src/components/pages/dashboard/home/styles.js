import styled from "styled-components";

export const GridContainer = styled.div`
	height: 100%;
	width: 100%;
`;

export const Title = styled.h2`
	color: #555;
	font-size: 1.3rem;
	margin-top: 0.5rem;
	padding-left: 0rem;
`;

export const Row = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
`;

export const Col = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const ShortcutBox = styled.div`
	width: 33%;
	height: 35%;
	box-shadow: 0px 0px 10px #55555580, inset 50px 50px 50px #ffffff60,
		inset -50px -50px 50px #ffffff60;
	border-radius: 0.5rem;
	background-size: 100%;
	transition: 0.3s;
	background-position: 50%;
	background-size: 100%;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	:hover {
		background-size: 150%;
		box-shadow: 0 0 5px #000;
		cursor: pointer;
	}
	:active {
		background-size: 140%;
		box-shadow: 0 0 5px #fff, inset 50px 50px 50px #ffffff50;
	}
`;
