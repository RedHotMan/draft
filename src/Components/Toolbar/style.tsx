import styled from '@emotion/styled';

export const StyledToolbar = styled.div({
    minHeight: '2rem',
    padding: '0 0.5rem',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    },
    props => ({
        backgroundColor: props.theme.toolbar.background,
    })
)
