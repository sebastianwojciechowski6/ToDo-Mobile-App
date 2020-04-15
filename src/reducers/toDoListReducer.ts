import * as actionTypes from '../actions/types/toDoListTypes';
import {ISingleElementList} from '../entities/toDoSingleEl';

export interface IToDoListReducer {
    toDoList: ISingleElementList[];
}

const defaultState = (): IToDoListReducer => ({
    toDoList: [{
        name: 'Pierwszy',
        description: 'Pierwszy description'
    }, {
        name: 'Drugi',
        description: 'Drugi description'
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
        default: {
            return state;
        }
    }
};
