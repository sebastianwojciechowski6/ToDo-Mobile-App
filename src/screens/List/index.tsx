import * as React from 'react';
import styled from 'styled-components/native';
import {FC, useState} from 'react';
import {ScrollContainer} from "../Home";
import Layout from "../../constans/Layout";
import Form from "../../components/Form";
import ToDoList from "../../components/ToDoList";
import {View} from "react-native";

const StaticPageView = styled.View`
    margin-top: ${`${Layout.statusBar}px`}
    background-color: yellow;
    height: 100%;
    width: 100%;
`;
const TaskBox = styled.View`
    border: 2px solid black;
    width: 70%;
    margin-left: 15%;
    margin-top: 5%;
`;
const FirstTaskBox = styled(TaskBox)`
    margin-top: 10%;
`;
const TaskContent = styled.Text`
    padding: 5px;
`;
const TaskHeader = styled(TaskContent)`
    background-color: white;
`;
const TaskViewContent = styled.View`
    background-color: #039be5;
    min-height: 20px;
`;
const TaskTitle = styled.Text`
    font-weight: bold;
`;
const AddTaskImg = styled.Image`
    height: 40px;
    width: 40px;
    position: absolute;
    right: 20px;
    top: 540px;
    border-radius: 20px;
`;
const ListTab: FC = () => {
    const [formView, setFormView] = useState<boolean>(false);

    return (                                                                //TODO: Zapytac o połączenie ToDoList.tsx z index.tsx
        <StaticPageView>
            <ScrollContainer>
                <FirstTaskBox>
                    <TaskHeader>
                        <TaskTitle>Tytuł zadania</TaskTitle>
                    </TaskHeader>
                    <TaskViewContent>
                        <ScrollContainer>
                            <TaskContent>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </TaskContent>
                        </ScrollContainer>
                    </TaskViewContent>
                </FirstTaskBox>

                <TaskBox>
                    <TaskHeader>
                    </TaskHeader>
                    <TaskViewContent>
                        <ScrollContainer>
                            <TaskContent>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </TaskContent>
                        </ScrollContainer>
                    </TaskViewContent>
                </TaskBox>
            </ScrollContainer>

            <AddTaskImg
                source={require('../../assets/plus.png')}
            />
            <View>                                                                          //TODO: Zapytać o podpięcie formularza do przycisku z obrazka powyżej
                {formView ? (
                    <Form switchView = {setFormView}/>
                ) : (
                    <ToDoList switchView = {setFormView}/>
                )}
            </View>
        </StaticPageView>

    );
};

export default ListTab;
