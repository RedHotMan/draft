/** @jsxImportSource @emotion/react */
import React from 'react';

import SideContainer from "../SideContainer";
import Toolbar from "../Toolbar";

import { StyledTextarea } from './style';

interface props {
    content: string
}

const InputSide: React.FC<props> = ({ content }) => {
    return (
        <SideContainer>
            <Toolbar title={'Markdown'} />
            <StyledTextarea value={content} />
        </SideContainer>
    )
}

export default InputSide;
