import { FILTER_BY_TYPE } from "./action";
import { IStore } from './../utils/interfece';
let globalState = {
    courses: [
        {
            id: 1,
            name: "Illustrator",
            lessonsQuantity: 24,
            duration: 134,
            backgroundImage: "illustration",
            favorite: false,
            newest: true,
            popular: true
        },
        {
            id: 2,
            name: "Graphic design",
            lessonsQuantity: 30,
            duration: 236,
            backgroundImage: "graphic_design",
            favorite: true,
            newest: false,
            popular: true
        }
    ],
    filtered: {
        type: "populars",
        data: []
    }
}

export default function reducer(state: Object = globalState, action: { type: string; data: IStore[] }) {
    console.log(action.data)
    switch (action.type) {
        case FILTER_BY_TYPE:
            return {
                ...state,
                filtered: action.data
            }
        default:
            return state;
    }
}

