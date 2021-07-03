import { StyledContainer, CardHeader, StyledImage } from '../../styles'

interface Card {
    id?: number;
    name?: string;
    image?: string;
}

export default function Card(props: Card) {
    const { name, image } = props
    return (
        <StyledContainer>
            <CardHeader>
                <h2>{name}</h2>
                <StyledImage>
                    <img src={image} alt="" />
                </StyledImage>
            </CardHeader>
        </StyledContainer>
    )
}

