/** @jsxImportSource @emotion/react */
import React from 'react';

import { RiFileCopy2Line, RiEraserLine } from 'react-icons/ri';

import { StyledToolbar } from "./style";

interface props {
    title: string,
    isInputSide?: boolean,
    onCopy?: () => void,
    onErase?: () => void,
}

const Toolbar: React.FC<props> = ({ title= 'Toolbar', isInputSide = false, onCopy, onErase }) => {
    return (
        <StyledToolbar>
            <h2 css={{ fontSize: '0.7rem', margin: 0 }}>{title}</h2>
            { isInputSide &&
            <div css={{ display: 'flex', width: '4rem', justifyContent: 'space-around'}}>
                <RiFileCopy2Line css={{ cursor: 'pointer', flex: 'none' }} onClick={onCopy}/>
                <RiEraserLine css={{ cursor: 'pointer', flex: 'none' }} onClick={onErase}/>
            </div> }
        </StyledToolbar>
    )
};

export default Toolbar;
