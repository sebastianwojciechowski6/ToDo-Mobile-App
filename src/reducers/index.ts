import {combineReducers} from 'redux';

import toDoList, {IToDoListReducer} from './toDoListReducer';

export default combineReducers({
    toDoList
});

export interface IState {
    toDoList: IToDoListReducer;
}
