import styled, { keyframes, css } from 'styled-components';


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;}
`


export const Result = styled.div`
max-width: 250px;
padding: 20px;
color: #fff;
background-color:rgba(0, 255, 0, 0.5);
position: absolute;
top: 0;
right: 0;
font-size: 32px;
transition: 1s all ease;
animation: .5s ${fadeIn} ease-out;
${props =>
        props.result === false &&
        css`
        background-color:rgba(255, 0,0, 0.5);
    `}
`
