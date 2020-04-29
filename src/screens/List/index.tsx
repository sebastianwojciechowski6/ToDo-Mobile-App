import * as React from 'react';
import styled from 'styled-components/native';
import {FC, useState} from 'react';
import Form from "../../components/Form";
import ToDoList, {StaticPageView} from "../../components/ToDoList";
import {Image, TouchableWithoutFeedback} from "react-native";

const AddTaskImg = styled.Image`
    height: 40px;
    width: 40px;
    position: absolute;
    right: 20px;
    top: 540px;
    border-radius: 20px;
`;
const HeaderImg = styled.Image`
    width: 100%;
    height: 100px;
`;
const ListTab: FC = () => {
    const [formView, setFormView] = useState<boolean>(false);

    return (
        <StaticPageView>
            <HeaderImg source={require('../../assets/todolist.png')}/>
            <TouchableWithoutFeedback
                onPress={() => setFormView(true)}>
                <AddTaskImg source={require('../../assets/plus.png')}/>
            </TouchableWithoutFeedback>
            {formView ? (
                <Form switchView={setFormView}/>
            ) : (
                <ToDoList switchView={setFormView}/>
            )}
        </StaticPageView>
    );
};

export default ListTab;
