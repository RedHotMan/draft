/** @jsxImportSource @emotion/react */
import React from 'react';

import { StyledToolbar } from "./style";

interface props {
    sideName: string,
}

const Toolbar: React.FC<props> = ({ sideName= 'Toolbar' }) => {
    return (
        <StyledToolbar>
            <h2 css={{ fontSize: '0.7rem' }}>{sideName}</h2>
        </StyledToolbar>
    )
};

export default Toolbar;
