import * as React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import {FC} from 'react';
import {ScrollContainer} from "../Home";
import Layout from "../../constans/Layout";

const StaticPageView = styled.View`
    margin-top: ${`${Layout.statusBar}px`}
    background-color: yellow;
    height: 100%;
    width: 100%;
`;
const TaskBox = styled.View`
    border: 2px solid black;
    width: 70%;
    maxHeight: 100px;
    margin-left: 15%;
    margin-top: 5%;
    flex: 1;
`;
const FirstTaskBox = styled(TaskBox)`
    margin-top: 10%;
`;
const TaskHeader = styled.View`
    background-color: white;
    padding: 5px;
    border-bottom-width: 1px;
`;
const TaskContent = styled.Text`
    padding: 5px;
`;
const TaskScrolledContent = styled(ScrollContainer)`
    background-color: #039be5;
    height: 30px;
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
    return (
        <StaticPageView>
            <ScrollContainer>
                <FirstTaskBox>
                    <TaskHeader>
                        <TaskTitle>Tytuł zadania</TaskTitle>
                    </TaskHeader>
                    <TaskScrolledContent>
                        <TaskContent>Treść zadania</TaskContent>
                    </TaskScrolledContent>
                </FirstTaskBox>
                <TaskBox>
                    <TaskHeader>

                    </TaskHeader>
                    <TaskContent>

                    </TaskContent>
                </TaskBox>
                <TaskBox>
                    <TaskHeader>

                    </TaskHeader>
                    <TaskContent>

                    </TaskContent>
                </TaskBox>
            </ScrollContainer>
            <AddTaskImg
                source={require('../../assets/plus.png')}
            />
        </StaticPageView>

    );
};

export default ListTab;
