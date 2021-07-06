import { StyledContainer, StyledImage } from '../../styles'

interface CardInterfacre {
    id?: number;
    name?: string;
    image?: string;
}

export default function Card(props: CardInterfacre) {
    const { image } = props
    return (
        <StyledContainer>
            <StyledImage>
                <img src={image} alt="" />
            </StyledImage>
        </StyledContainer>
    )
}

