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
import { IStore } from '../../utils/interfece'

interface ICources {
    courses: IStore[];
    filtered: {
        data: IStore[];
        type: string;
    }
}

enum FilteredTypeEnum {
    POPULAR = "popular",
    FAVORITE = "favorite",
    NEWEST = "newest"
}

export default function Home() {
    const { courses, filtered } = useSelector((store: ICources) => store)

    const dispatch = useDispatch()

    const handleFilterData = (type: FilteredTypeEnum) => {
        const filteredByType = courses.filter((element: IStore) => element[type] === true)
        const filteredData = {
            type,
            data: filteredByType
        }
        dispatch({ type: FILTER_BY_TYPE, data: filteredData })
    }
    
    useEffect(() => {
        handleFilterData(FilteredTypeEnum.POPULAR)
    }, [])

    return (
        <StyledMain>
            <SidebarMenu />
            <StyledContent>
                <StyledHeader>
                    <StyledTitle>Courses</StyledTitle>
                    <StyledMenu>
                        <StyledButton
                            onClick={() => handleFilterData(FilteredTypeEnum.POPULAR)}
                            isActive={filtered.type === FilteredTypeEnum.POPULAR}
                        >
                            Popular
                        </StyledButton>
                        <StyledButton
                            onClick={() => handleFilterData(FilteredTypeEnum.FAVORITE)}
                            isActive={filtered.type === FilteredTypeEnum.FAVORITE}
                        >
                            Favorite
                        </StyledButton>
                        <StyledButton
                            onClick={() => handleFilterData(FilteredTypeEnum.NEWEST)}
                            isActive={filtered.type === FilteredTypeEnum.NEWEST}
                        >
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
