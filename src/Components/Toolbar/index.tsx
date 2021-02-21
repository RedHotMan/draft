/** @jsxImportSource @emotion/react */
import React from 'react';

import { RiFileCopy2Line } from 'react-icons/ri';

import { StyledToolbar } from "./style";

interface props {
    title: string,
    enableContentCopy?: boolean,
    onCopy?: () => void,
}

const Toolbar: React.FC<props> = ({ title= 'Toolbar', enableContentCopy = false, onCopy }) => {
    return (
        <StyledToolbar>
            <h2 css={{ fontSize: '0.7rem', margin: 0 }}>{title}</h2>
            { enableContentCopy && <RiFileCopy2Line css={{ cursor: 'pointer' }} onClick={onCopy}/> }
        </StyledToolbar>
    )
};

export default Toolbar;
