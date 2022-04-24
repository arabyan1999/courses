import SidebarMenu from '../../components/sidebarMenu'
import {
    StyledMain,
    StyledContent,
    StyledTitle
} from '../styles'

const Customers = () => {
    return (
        <StyledMain>
            <SidebarMenu />
            <StyledContent>
                <StyledTitle>Customers</StyledTitle>
            </StyledContent>
        </StyledMain>
    )
}

export default Customers