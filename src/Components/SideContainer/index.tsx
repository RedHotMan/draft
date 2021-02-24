import React from 'react';

import { StyledSideContainer } from './style';

const SideContainer: React.FC = ({ children }) => {
    return <StyledSideContainer>{children}</StyledSideContainer>;
};

export default SideContainer;
