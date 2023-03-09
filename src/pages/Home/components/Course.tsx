import styled from "styled-components"
import illustration from "../../../images/illustration.png"
import graphic_design from "../../../images/graphic_design.png"
import {ReactComponent as Play} from "../../../images/play.svg"

interface ICourse {
    name: string;
    lessonsQuantity: number;
    backgroundImage: string;
    duration: number;
}

interface IImages {
    [key: string]: string | undefined
}

const Course = ({ name, lessonsQuantity, backgroundImage, duration }: ICourse) => {
    const images: IImages = {
        illustration,
        graphic_design
    }
    return (
        <StyledCourseConainer backgroundImage={images[backgroundImage]}>
            <StyledFlexDiv>
                <div>
                    <h3>{name}</h3>
                    <p>{lessonsQuantity} lessons</p>
                </div>
                <h3>{duration} min</h3>
            </StyledFlexDiv>
            <Play />
        </StyledCourseConainer>
    )
}

export default Course

const StyledCourseConainer = styled.div<{backgroundImage?: string}>`
    border-radius: 24px;
    width: 100%;
    background-image: ${({backgroundImage}) => (`url(${backgroundImage})`)};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 544px;
    padding: 42px 96px 64px 42px;
    box-sizing: border-box;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 60px;
    @media (max-width: 1000px) {
        height: 400px;
        padding: 21px 41px 42px 21px;
    }
`

const StyledFlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    h3 {
        font-size: 24px;
        margin-bottom: 14px;
    }
    p {
        font-size: 16px;
    }
`

