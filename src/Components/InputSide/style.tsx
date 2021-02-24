import styled from '@emotion/styled';

export const StyledTextarea = styled.textarea(
    {
        resize: 'none',
        height: '100%',
        padding: '2rem',
        backgroundColor: 'transparent',
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
    (props) => ({
        backgroundColor: props.theme.sides.background,
        color: props.theme.sides.color,
    }),
);
