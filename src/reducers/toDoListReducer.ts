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
        name: 'Długi',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
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
