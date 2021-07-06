import styled from "styled-components";
import { useSelector } from 'react-redux'
import { useState } from "react";
export default function Categories({ setState = (id: any) => { return id } }) {
	const state = useSelector((store: any) => store.categories)
	const [open, setOpen] = useState(false)
	const handleClick = (id: any) => {
		setState("&category_ids=" + id)
		setOpen(false)
	}
	return (
		<>
			<OpenButton onClick={() => setOpen(true)}>Open &#8594;</OpenButton>
			<Container className={open ? "active" : ""}>
				{open && <CloseButton onClick={() => setOpen(false)}>x</CloseButton>}
				<Label>Choose a category:</Label>
				{state?.map((item: any) => (
					<CategoryLinks className={""} onClick={() => handleClick(item.id)} key={item.id}>{item.name}</CategoryLinks>
				))}
			</Container>
		</>
	)
}

const Container = styled.div`
	background-color: aliceblue;
	height: 100vh;
	position: fixed;
	top: 0;
	padding: 0 20px 0 60px;
	display: flex;
	flex-direction: column;
	transition: all 0.8s;
	@media (max-width: 1000px) {
		left: -100%;
		&.active {
			left: 0;
		}
	}
`

const CategoryLinks = styled.button`
	border: none;	
	width: auto;
	text-decoration: none;
	margin: 20px 0;
	font-size: 22px;
	color: black;
	opacity: 0.6;
	cursor: pointer;
	background: transparent;
	&.ACTIVE {
		opacity: 1;
	}
	:hover {
		opacity: 1;
	}
	:active {
		opacity: 1;
	}
`

const Label = styled.label`
	margin-top: 35px;
	font-size: 22px;
`

const OpenButton = styled.button`
	border: 1px solid grey;
	border-bottom-right-radius: 6px;
	border-top-right-radius: 6px;
	position: fixed;
	left: 0;
	top: 100px;
	height: 40px;
	background: transparent;
	color: wheat;
	cursor: pointer;
`

const CloseButton = styled.button`
	font-size: 20px;
	border: none;
	background: transparent;
	cursor: pointer;
	position: fixed;
	left: 240px;
	margin-top: 10px;
	:hover {
		opacity: 0.6;
	}
`