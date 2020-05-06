import React, {FC} from 'react';
import styled from 'styled-components';
import {TouchableWithoutFeedback, View, Text} from "react-native";
import {useSelector, useDispatch} from 'react-redux';
import {IState} from "../reducers";
import {IToDoListReducer} from "../reducers/toDoListReducer";
import {ISingleElementList} from "../entities/toDoSingleEl";
import {removeElemToDolist} from "../actions/toDoListActions";
import Layout from "../constans/Layout";
import {ScrollContainer} from "../screens/Home";
import {BlackButton} from "./Form";

const PageWrapper = styled.View`
    margin: 0 20px 0 20px;
    overflow: hidden;

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
    border-top-width: 1px;
    border-color: black;
    max-height: 200px;
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
        <PageWrapper>
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
                            <TouchableWithoutFeedback onPress={() => removeData(elem.id)}>
                                <View>
                                    <BlackButton>Done</BlackButton>
                                </View>
                            </TouchableWithoutFeedback>
                        </ScrollContainer>
                    </TaskViewContent>
                </TaskBox>
            )}

        </PageWrapper>
    )
};

export default ToDoList;
