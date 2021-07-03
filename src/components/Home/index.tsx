import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Cat from '../cat'
import Categories from '../categories'
import { useEffect, useState } from 'react'
import { ADD_DATA, ADD_CATEGORIES } from "../../store/action"
import { Button } from '../../styles'
export default function Home() {
    const state = useSelector((store: any) => store.cats)
    const dispatch = useDispatch()
    const [data, setData] = useState()
    const [catData, setCatData] = useState()
    const [pageNumber, setPageNumber] = useState(10)
    const [categoryId, setCategoryId] = useState(null)

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/categories")
            .then((response: any) => {
                if (response.ok) {
                    return response.json()
                }
                throw response
            })
            .then((data: any) => {
                setData(data)
            })
            .catch(error => {
                console.log("Throw new error", error);
            })
        fetch(`https://api.thecatapi.com/v1/images/search?limit=${pageNumber}&page=1${categoryId}`)
            .then((response: any) => {
                if (response.ok) {
                    return response.json()
                }
                throw response
            })
            .then((data: any) => {
                setCatData(data)
            })
            .catch(error => {
                console.log("Throw new error", error);
            })
    }, [pageNumber, categoryId])

    dispatch({ type: ADD_CATEGORIES, data })
    dispatch({ type: ADD_DATA, catData })
    const click = () => {
        setPageNumber(initial => initial + 10)
    }
    return (
        <StyledMain>
            <Categories setState={setCategoryId} />
            <Container>
                {
                    state?.map((a: any) => (
                        <Cat key={a.id} id={a.id} image={a.url} />
                    ))
                }
            </Container>
            <Button onClick={click} width={200}>Load more...</Button>
        </StyledMain>
    )
}

const StyledMain = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 20px;
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    padding: 40px 0;
    @media (min-width: 1001px) {
        margin-left: 280px;
    }
    @media (max-width: 530px) {
        flex-direction: column;
        justify-content: center;
    }
`