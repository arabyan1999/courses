import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SidebarMenu from '../../components/sidebarMenu'
import {
    StyledMain,
    StyledContent,
    StyledTitle,
    StyledHeader,
    StyledMenu,
    StyledButton,
    StyledContainer
} from '../styles'
import Course from './components/Course'
import { FILTER_BY_TYPE } from "../../store/action";

interface IStore {
    id: number,
    name: string,
    lessonsQuantity: number,
    duration: number,
    backgroundImage: string,
    favorite: boolean,
    newest: boolean,
    popular: boolean
}

export default function Home() {
    const { courses, filtered } = useSelector((store: any) => store)
    const dispatch = useDispatch()

    const handleFilterData = (type: "popular" | "favorite" | "newest") => {
        const filteredByType = courses.filter((element: IStore) => element[type] === true)
        const filteredData = {
            type,
            data: filteredByType
        }
        dispatch({ type: FILTER_BY_TYPE, data: filteredData })
    }
    
    useEffect(() => {
        handleFilterData('popular')
    }, [])

    return (
        <StyledMain>
            <SidebarMenu />
            <StyledContent>
                <StyledHeader>
                    <StyledTitle>Courses</StyledTitle>
                    <StyledMenu>
                        <StyledButton onClick={() => handleFilterData('popular')} isActive={filtered.type === "popular"}>
                            Popular
                        </StyledButton>
                        <StyledButton onClick={() => handleFilterData('favorite')} isActive={filtered.type === "favorite"}>
                            Favorite
                        </StyledButton>
                        <StyledButton onClick={() => handleFilterData('newest')} isActive={filtered.type === "newest"}>
                            New
                        </StyledButton>
                    </StyledMenu>
                </StyledHeader>
                <StyledContainer className='ScrollbarsCustom native trackYVisible trackXVisible'>
                    {
                        filtered.data.map((item: IStore, index: number) => (
                            <div key={item.id ?? index}>
                                <Course
                                    name={item.name}
                                    duration={item.duration}
                                    lessonsQuantity={item.lessonsQuantity}
                                    backgroundImage={item.backgroundImage}
                                />
                            </div>
                        ))
                    }
                </StyledContainer>
            </StyledContent>
        </StyledMain>
    )
}
