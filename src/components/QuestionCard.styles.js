import styled from 'styled-components';



export const Wrapper = styled.div`
max-width: 1100px;
height: 500px;
display: flex;
align-items: center;
flex-direction: column;
background-color:rgba(255,255,255, 0.5);
padding: 20px 15px;
border: 2px solid rgb(64,199,129)
`


export const WrappedButtons = styled.div`
display:flex;
flex-direction: column;
width: 100%;
`

export const QuestionButton = styled.button`
border: 0;
background-color: rgba(0,0,0, 0.7);
color: white;
margin-bottom: 20px;
padding: 15px;
cursor: pointer;
`

export const Question = styled.div`
    font-size: 32px;
    text-align:center;
    margin-bottom: 20px;
`

export const QuestionCounter = styled.div`
font-size: 21px;
tex-align: center;
margin-bottom: 50px;
`