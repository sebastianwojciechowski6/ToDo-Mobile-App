import * as actionTypes from '../actions/types/toDoListTypes';
import {ISingleElementList} from '../entities/toDoSingleEl';

export interface IToDoListReducer {
    toDoList: ISingleElementList[];
}

const defaultState = (): IToDoListReducer => ({
    toDoList: [{
        name: 'Pierwszy',
        description: 'Pierwszy description',
        id: 1
    }, {
        name: 'Drugi',
        description: 'Drugi description',
        id: 2
    }]
});

export default (state = defaultState(), action: any): IToDoListReducer => {
    switch (action.type) {
        case actionTypes.SET_NEW_ELEMENT: {
            return {
                ...state,
                toDoList: [...state.toDoList, action.newElem]
            };
        }
        case actionTypes.REMOVE_NEW_ELEMENT: {
            return {
                ...state,
                toDoList: state.toDoList.filter(elem => elem.id !== action.elemId)
            }
        }
        default: {
            return state;
        }
    }
};
