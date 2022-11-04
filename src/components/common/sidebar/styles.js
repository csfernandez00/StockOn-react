import Styled from "styled-components";
import COLORS from "../theme/colors";

export const SideNav = Styled.div`
	height: 100%;
	padding-top: 8vh;
	width: 6rem;
	background: linear-gradient(to bottom, ${COLORS.purple}, ${COLORS.pink});
	display: flex;
	flex-direction: column;
	align-items: center;
	position: fixed;
	box-shadow: 3px 5px 10px #aaa;
  margin-top:-8vh;
  z-index: -10;
`;

export const Nav = Styled.nav`
	padding: 2rem 0rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 87%;

  
`;

export const Buttons = Styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
  justify-content: center
	list-style-type: none;
	gap: 2rem;
	width:3rem;

`;

export const ButtonCont = Styled.li`
	display: flex;
	flex-direction: row;
  align-items: center;
  justify-content: center;
	width: 100%;
  padding-right: 2.5rem;
`;
