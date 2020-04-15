import {combineReducers} from 'redux';

import example, {IToDoListReducer} from './toDoListReducer';

export default combineReducers({
    example
});

export interface IState {
    example: IToDoListReducer;
}
