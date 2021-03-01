import styled from '@emotion/styled';

export const StyledNavbar = styled.nav(
    {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '3rem',
        padding: '0 1rem',
    },
    ({ theme }) => ({
        backgroundColor: theme.navbar.background,
        color: theme.navbar.color,
    }),
);
