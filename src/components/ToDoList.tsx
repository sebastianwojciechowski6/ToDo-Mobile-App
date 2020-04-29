import React, {FC} from 'react';
import styled from 'styled-components';
import {Button, Image} from "react-native";
import {useSelector, useDispatch} from 'react-redux';
import {IState} from "../reducers";
import {IToDoListReducer} from "../reducers/toDoListReducer";
import {ISingleElementList} from "../entities/toDoSingleEl";
import {removeElemToDolist} from "../actions/toDoListActions";
import Layout from "../constans/Layout";
import {ScrollContainer} from "../screens/Home";

export const Wrapper = styled.View`
    margin: 0 20px 0 20px;
`;
export const StaticPageView = styled.View`
    margin-top: ${`${Layout.statusBar}px`}
    background-color: yellow;
    height: 100%;
    width: 100%;
`;
const TaskBox = styled.View`
    border: 1px solid black;
    width: 90%;
    margin-left: 5%;
    margin-top: 5%;
`;
const TaskContent = styled.Text`
    padding: 10px;
    color: black;
    width: 100%;
`;
const TaskViewContent = styled.View`
    min-height: 100px;
`;
const TaskTitle = styled.Text`
    font-weight: bold;
`;

type RemoveElemToDoList = ReturnType<typeof removeElemToDolist>;
const ToDoList: FC<{ switchView(formView: boolean) }> = props => {
    const dispatch = useDispatch();
    const toDoListState = useSelector<IState, IToDoListReducer>(state => state.toDoList);
    const removeData = (id: number) => {
        dispatch<RemoveElemToDoList>(removeElemToDolist(id));
    };

    return (
        <Wrapper>
            {toDoListState.toDoList.map((elem: ISingleElementList, index: number) =>
                <TaskBox key={index}>
                    <TaskContent>
                        <TaskTitle>
                            {elem.name}
                        </TaskTitle>
                    </TaskContent>
                    <TaskViewContent>
                        <ScrollContainer>
                            <TaskContent>
                                {elem.description}
                            </TaskContent>
                            <Button title='Done' onPress={() => removeData(elem.id)}/>
                        </ScrollContainer>
                    </TaskViewContent>
                </TaskBox>
            )}
        </Wrapper>
    )
};

export default ToDoList;
