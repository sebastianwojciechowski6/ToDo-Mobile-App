import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {TouchableWithoutFeedback, View, Text, TextInput} from "react-native";
import {useDispatch} from 'react-redux';
import {setNewElemToDoList} from "../actions/toDoListActions";
import {ISingleElementList} from "../entities/toDoSingleEl";

const FormWrapper = styled.View`
    margin: 0 20px 0 20px;
`;
const CustomTextInput = styled.TextInput`
    border-bottom-width: 1px;
    padding: 10px;
    color: black;
    width: 100%;
`;
export const BlackButton = styled.Text`
    color: black;
    text-align: center;
    margin-top: 5%;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 10%;
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
        <FormWrapper>
            <CustomTextInput value={nameInput} onChange={nameValueChange} placeholder='Name'/>
            <CustomTextInput value={descriptionInput} onChange={descriptionValueChange} placeholder='Description'/>

            <TouchableWithoutFeedback onPress={saveData}>
                <View>
                    <BlackButton>Save</BlackButton>
                </View>
            </TouchableWithoutFeedback>
        </FormWrapper>
    );
};

export default Form;
