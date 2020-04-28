import * as actionTypes from './types/toDoListTypes';
import {ISingleElementList} from "../entities/toDoSingleEl";

export const setNewElemToDoList = (newElem: ISingleElementList) => ({
    type: actionTypes.SET_NEW_ELEMENT,
    newElem
});

export const removeElemToDolist = (elemId: number) => ({
    type: actionTypes.REMOVE_NEW_ELEMENT,
    elemId
});
