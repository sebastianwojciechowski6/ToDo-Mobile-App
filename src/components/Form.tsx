import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {Wrapper} from "./ToDoList";
import {TextInput} from "react-native";

const CustomTextInput = styled.TextInput`
    border: 1px solid black;
    padding: 10px;
    color: black;
    width: 100%;
`;
const Form: FC = props => {
    return (
        <Wrapper>
            <CustomTextInput value={} onChange={} placeholder='Name'/>
            <CustomTextInput value={} onChange={} placeholder='Description'/>
        </Wrapper>
    )
};

export default Form;
