import styled from '@emotion/styled';

export const StyledTextarea = styled.textarea(
    {
        resize: 'none',
        height: '100%',
        padding: '2rem',
        backgroundColor: 'transparent',
        overflow: 'auto',
        border: 'none',
        '&:focus': {
            outline: 'none',
        },
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        '-ms-overflow-style': {
            scrollbarWidth: 'none',
        },
    },
    ({ theme }) => ({
        backgroundColor: theme.sides.background,
        color: theme.sides.color,
    }),
);
