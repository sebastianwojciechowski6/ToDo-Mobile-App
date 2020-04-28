import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {Wrapper} from "./ToDoList";
import {Button} from "react-native";
import {useDispatch} from 'react-redux';
import {setNewElemToDoList} from "../actions/toDoListActions";
import {ISingleElementList} from "../entities/toDoSingleEl";


const CustomTextInput = styled.TextInput`
    border: 1px solid black;
    padding: 10px;
    color: black;
    width: 100%;
`;

type SetNewElemToDoList = ReturnType<typeof setNewElemToDoList>;
const Form: FC<{ switchView(formView: boolean) }> = props => {
    const dispatch = useDispatch();
    const [nameInput, setNameInput] = useState<string>('');
    const [descriptionInput, setDescriptionInput] = useState<string>('');

    const nameValueChange = (txt) => {
        setNameInput(txt.nativeEvent.text);
    };
    const descriptionValueChange = (txt) => {
        setDescriptionInput(txt.nativeEvent.text);
    };
    const saveData = () => {
        dispatch<SetNewElemToDoList>(setNewElemToDoList({
            name: nameInput,
            description: descriptionInput,
            id: new Date().getTime()
        } as ISingleElementList));
        props.switchView(false);
    };

    return (
        <Wrapper>
            <CustomTextInput value={nameInput} onChange={nameValueChange} placeholder='Name'/>
            <CustomTextInput value={descriptionInput} onChange={descriptionValueChange} placeholder='Description'/>
            <Button title='Save' onPress={saveData}/>
        </Wrapper>
    )
};

export default Form;
