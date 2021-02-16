import styled from '@emotion/styled';

export const Preview = styled.div({
    height: '100%',
    overflow: 'auto',
    padding: '2rem',
    },
    props => ({
        backgroundColor: props.theme.sides.background,
        color: props.theme.sides.color,
    })
);
