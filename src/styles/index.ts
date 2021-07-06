import styled from "styled-components"
export const StyledContainer = styled.div`
    background-color: aliceblue;
    border-radius: 23px;
    padding: 20px;
    margin: 0 40px 40px;
    cursor: pointer;
`

export const StyledImage = styled.div`
    width: 100%;
    height: 250px;
    img {
        width: 100%;
        height: 100%;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 20px;
`

export const Button = styled.button<{ background?: string; width?: number }>`
    width: ${({ width }) => width ? width : 60}px;
    height: 60px;
    border-radius: 10px;
    background: ${({ background }) => background ? background : "linear-gradient(270deg, rgb(250, 188, 126) 0%, rgb(255, 150, 45) 100%) repeat scroll right bottom"};
    cursor: pointer;
    font-size: 20px;
    margin: 0 auto;
    border: none;
    :hover {
        background: linear-gradient(270deg, rgb(255, 150, 45) 100%, rgb(250, 188, 126) 0%) repeat scroll right bottom;
    }
    @media (min-width: 1001px) {
        margin-left: 323px;
    }
`