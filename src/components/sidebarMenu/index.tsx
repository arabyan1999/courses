import styled from "styled-components";
import { ReactComponent as DashbordIcon } from "../../images/dashboard-interface.svg"
import { ReactComponent as ShoppingListIcon } from "../../images/shopping-list.svg"
import { ReactComponent as CustomersIcon } from "../../images/customers.svg"
import { Link, useLocation } from "react-router-dom"

export default function SidebarMenu() {
	const location = useLocation()
	return (
		<StyledContainer>
			<StyledLinks to="/" isActive={location.pathname === "/"}>
				<DashbordIcon />
			</StyledLinks>
			<StyledLinks to="/shopping-list" isActive={location.pathname.includes("shopping-list")}>
				<ShoppingListIcon />
			</StyledLinks>
			<StyledLinks to="/customers" isActive={location.pathname.includes("customers")}>
				<CustomersIcon />
			</StyledLinks>
		</StyledContainer>
	)
}

const StyledContainer = styled.div`
	background-color: #FFE4D6;
	height: 100vh;
	position: fixed;
	padding: 127px 56px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	transition: all 0.8s;
	@media (max-width: 1000px) {
		padding: 127px 26px;
	}
`

const StyledLinks = styled(Link)<{isActive: boolean}>`
	border: none;	
	width: auto;
	text-decoration: none;
	margin-bottom: 72px;
	font-size: 22px;
	color: black;
	cursor: pointer;
	background: transparent;
	svg path {
		fill: ${({isActive}) => isActive ? "#8964D7" : "#E1AA98"} ;
		width: 48px;
		height: 48px;
	}
	:hover {
		opacity: .7;
	}
`
