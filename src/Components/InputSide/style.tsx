import styled from '@emotion/styled';

export const StyledTextarea = styled.textarea`
    resize: none;
    height: 100%;
    margin: 20px;
    background-color: transparent;
    border: none;
    &:focus {
        outline: none;
    }
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;
