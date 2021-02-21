import React, { Dispatch } from 'react';

import SideContainer from "../SideContainer";
import Toolbar from "../Toolbar";

import { StyledTextarea } from './style';

interface props {
    content: string
    setContent: Dispatch<React.SetStateAction<string>>
}

const InputSide: React.FC<props> = ({ content, setContent }) => {

    const copyContentToClipboard = () => {
        {/* TODO: Display Snackbar on success or on error */}
        navigator.clipboard.writeText(content);
    }

    return (
        <SideContainer>
            <Toolbar title={'Markdown'} enableContentCopy={true} onCopy={copyContentToClipboard} />
            <StyledTextarea value={content} onChange={e => setContent(e.target.value)}/>
        </SideContainer>
    )
}

export default InputSide;
