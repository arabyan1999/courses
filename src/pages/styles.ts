import styled from "styled-components"

export const StyledMain = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const StyledContent = styled.div`
    margin-left: 160px;
    background-color: #FFF4EE;
    @media (max-width: 1000px) {
        margin-left: 100px;
    }
`

export const StyledTitle = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 59px;
`

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 64px 99px 0;
    @media (max-width: 1000px) {
		padding: 64px 21px 0;
        flex-direction: column;
	}
`

export const StyledMenu = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 1000px) {
        justify-content: flex-start;
        margin-top: 17px;
    }
`

export const StyledButton = styled.button<{isActive?: boolean}>`
    position: relative;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: ${({isActive}) => isActive ? "#6749A5" : "#CBB1A2"};
    border: unset;
    outline: unset;
    background: transparent;
    margin-left: 48px;
    cursor: pointer;
    ::after {
        content: ${({isActive}) => isActive ? "'_'" : ""};
        position: absolute;
        width: 20%;
        left: 40%;
        top: 40%;
        height: 2px;
        color: #6749A5;
    }
    :hover {
        opacity: .7;
    }
    @media (max-width: 1000px) {
        margin-left: 0;
        margin-right: 35px;
    }
`

export const StyledContainer = styled.div`
    margin: 75px 0 10px;
    padding: 0 99px 64px;
    height: 73vh;
    overflow-y: auto;
    @media (max-width: 1000px) {
		padding: 0 21px 30px;
	}
`