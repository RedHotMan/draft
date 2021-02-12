/** @jsxImportSource @emotion/react */
import React from 'react';

const SideContainer: React.FC = ({ children }) => {
    return (
        <div css={{ display: 'flex', flexDirection: 'column', height: "100%" }}>
            {children}
        </div>
    )
};

export default SideContainer;
