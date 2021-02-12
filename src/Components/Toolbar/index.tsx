/** @jsxImportSource @emotion/react */
import React from 'react';

import { StyledToolbar } from "./style";

interface props {
    title: string,
}

const Toolbar: React.FC<props> = ({ title= 'Toolbar' }) => {
    return (
        <StyledToolbar>
            <h2 css={{ fontSize: '0.7rem', margin: 0 }}>{title}</h2>
        </StyledToolbar>
    )
};

export default Toolbar;
