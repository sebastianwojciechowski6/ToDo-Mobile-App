import * as actionTypes from './types/toDoListTypes';
import {ISingleElementList} from "../entities/toDoSingleEl";

export const setNewElemToDoList = (newElem: ISingleElementList) => ({
    type: actionTypes.SET_NEW_ELEMENT,
    newElem
});
