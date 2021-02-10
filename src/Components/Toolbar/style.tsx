import styled from '@emotion/styled';

export const StyledToolbar = styled.div({
    height: '2rem',
    padding: '0 0.5rem',
    textTransform: 'uppercase',
    },
    props => ({
        backgroundColor: props.theme.toolbar.background,
        color: props.theme.toolbar.color,
    })
)
