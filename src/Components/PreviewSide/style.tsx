import styled from '@emotion/styled';

export const Preview = styled.div(
    {
        height: '100%',
        overflow: 'auto',
        padding: '2rem',
    },
    ({ theme }) => ({
        '& a': {
            color: theme.sides.color,
        },
        backgroundColor: theme.sides.background,
        color: theme.sides.color,
    }),
);
