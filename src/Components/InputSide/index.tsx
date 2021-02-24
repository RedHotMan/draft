import React from 'react';

import SideContainer from '../SideContainer';
import Toolbar from '../Toolbar';

import { useSnackbar } from 'react-simple-snackbar';

import { StyledTextarea } from './style';

interface props {
    content: string;
    setContent: (value: string) => void;
}

const snackbarOptions = {
    success: {
        style: {
            backgroundColor: '#41d3bd',
            color: '#fff',
        },
    },
    error: {
        style: {
            backgroundColor: '#ef4f4f',
            color: '#fff',
        },
    },
};

const snackbarContent = {
    success: 'The markdown is copied to your clipboard 👍',
    error: 'An error occurred while trying to copy the markdown to your clipboard! ⚠️',
};

const InputSide: React.FC<props> = ({ content, setContent }) => {
    const [openSuccessSnackbar] = useSnackbar(snackbarOptions.success);
    const [openErrorSnackbar] = useSnackbar(snackbarOptions.error);

    const copyContentToClipboard = () => {
        navigator.clipboard
            .writeText(content)
            .then(() => openSuccessSnackbar(snackbarContent.success, 3000))
            .catch(() => openErrorSnackbar(snackbarContent.error, 3000));
    };

    const eraseContent = () => {
        setContent('');
    };

    return (
        <SideContainer>
            <Toolbar title={'Markdown'} isInputSide={true} onCopy={copyContentToClipboard} onErase={eraseContent} />
            <StyledTextarea value={content} onChange={(e) => setContent(e.target.value)} />
        </SideContainer>
    );
};

export default InputSide;
