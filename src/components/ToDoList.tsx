import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {Text, Button} from "react-native";
import {useSelector, useDispatch} from 'react-redux';
import {IState} from "../reducers";
import {IToDoListReducer} from "../reducers/toDoListReducer";
import {ISingleElementList} from "../entities/toDoSingleEl";
import {removeElemToDolist} from "../actions/toDoListActions";

export const Wrapper = styled.View`
    margin: 80px 20px 0 20px;
`;
const SingleElList = styled.View`
    border: 1px solid black;
    margin: 0 0 20px 0;
`;

type RemoveElemToDoList = ReturnType<typeof removeElemToDolist>;
const ToDoList: FC<{ switchView(formView: boolean) }> = props => {
    const dispatch = useDispatch();
    const toDoListState = useSelector<IState, IToDoListReducer>(state => state.toDoList);
    const goToForm = () => {
        props.switchView(true);
    };
    const removeData = (id: number) => {
        dispatch<RemoveElemToDoList>(removeElemToDolist(id));
    };

    return (
        <Wrapper>
            {toDoListState.toDoList.map((elem: ISingleElementList, index: number) =>
                <SingleElList key={index}>
                    <Text>{elem.name}</Text>
                    <Text>{elem.description}</Text>
                    <Button title='Remove' onPress={removeData(elem.id)}/> //TODO: Zapytać o problem
                </SingleElList>
            )}
            <Button title='Add new' onPress={goToForm}/>
        </Wrapper>
    )
};

export default ToDoList;
