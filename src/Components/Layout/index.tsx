/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';

import Split from 'react-split';
import { ThemeProvider } from '@emotion/react';
import SnackbarProvider from 'react-simple-snackbar';

import Navbar from '../Navbar';
import InputSide from '../InputSide';
import PreviewSide from '../PreviewSide';

import { useLocalStorage } from '../../hooks/useLocalStorage';

import placeholder from '../../utils/placeholder';
import { darkTheme, lightTheme } from '../../assets/themes';

const Layout: React.FC = () => {
    const [markdown, setMarkdown] = useLocalStorage<string>('markdown', placeholder);
    const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');
    const [direction, setDirection] = useState<'horizontal' | 'vertical'>('vertical');

    useEffect(() => {
        if (markdown.length <= 0) {
            setMarkdown(placeholder);
        }

        const changeDirection = () => {
            setDirection(window.innerWidth < 606 ? 'vertical' : 'horizontal');
        };
        changeDirection();
        window.onresize = changeDirection;
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <Navbar currentTheme={theme} toggleTheme={toggleTheme} />
            <Split
                css={{
                    display: 'flex',
                    flexDirection: direction === 'horizontal' ? 'row' : 'column',
                    height: 'calc(100vh - 3rem)',
                }}
                sizes={[50, 50]}
                minSize={direction === 'horizontal' ? 300 : 100}
                direction={direction}
                expandToMin={true}
                gutterAlign="center"
            >
                <SnackbarProvider>
                    <InputSide content={markdown} setContent={setMarkdown} />
                </SnackbarProvider>
                <PreviewSide content={markdown} />
            </Split>
        </ThemeProvider>
    );
};

export default Layout;
