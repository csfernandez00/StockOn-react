import Styled from "styled-components";

export const Container = Styled.div`
background-color: #fff;
height: 92%;
width: 96%;
border-radius:.5rem;
box-shadow: 0 0 10px #aaa;
padding: 2%;
display: grid;
grid-template-rows: 10% 83% 10%
`;

export const Row = Styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 1rem;
`;

export const Buttons = Styled.div`
display: flex;
flex-direction: row;
gap: .5rem;`;
