/** @jsxImportSource @emotion/react */
import React, { Dispatch } from 'react';

import SideContainer from "../SideContainer";
import Toolbar from "../Toolbar";

import { StyledTextarea } from './style';

interface props {
    content: string
    setContent: Dispatch<React.SetStateAction<string>>
}

const InputSide: React.FC<props> = ({ content, setContent }) => {
    return (
        <SideContainer>
            <Toolbar title={'Markdown'} />
            <StyledTextarea value={content} onChange={e => setContent(e.target.value)}/>
        </SideContainer>
    )
}

export default InputSide;
