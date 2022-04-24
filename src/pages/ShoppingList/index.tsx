import SidebarMenu from '../../components/sidebarMenu'
import {
    StyledMain,
    StyledContent,
    StyledTitle
} from '../styles'

const ShoppingList = () => {
    return (
        <StyledMain>
            <SidebarMenu />
            <StyledContent>
                <StyledTitle>Shopping List</StyledTitle>
            </StyledContent>
        </StyledMain>
    )
}

export default ShoppingList