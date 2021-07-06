import { StyledContainer, CardHeader, StyledImage } from '../../styles'

interface CardInterfacre {
    id?: number;
    name?: string;
    image?: string;
}

export default function Card(props: CardInterfacre) {
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

