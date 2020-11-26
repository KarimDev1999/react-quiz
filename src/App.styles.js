import styled, { css } from 'styled-components';



export const StyledApp = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: url('https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80') center center/cover no-repeat;
    height: 100vh;
    `

export const MainButton = styled.button`
    cursor: pointer;
    padding: 5px 20px;
    font-weight: 700;
    color: white;
    text-decoration: none;
    padding: .8em 1em calc(.8em + 3px);
    border-radius: 3px;
    background: rgb(64,199,129);
    box-shadow: 0 -3px rgb(53,167,110) inset;
    transition: 0.2s;
    border: none;
    padding: 15px 0px;
    width: 150px;
    ${props =>
        props.margin &&
        css`
        margin: 10px 0px;
        `};

`


export const StyledTite = styled.h1`
    text-align: center;
    margin: 0;
    color:#fff;
    font-size: 60px;
`