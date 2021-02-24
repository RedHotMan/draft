import styled from '@emotion/styled';

export const StyledNavbar = styled.nav(
    {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '3rem',
        padding: '0 1rem',
    },
    (props) => ({
        backgroundColor: props.theme.navbar.background,
        color: props.theme.navbar.color,
    }),
);
