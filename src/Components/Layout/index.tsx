/** @jsxImportSource @emotion/react */
import React, { useState }  from 'react';

import Split from "react-split";
import { ThemeProvider } from '@emotion/react'

import Navbar from '../Navbar';
import InputSide from '../InputSide';
import PreviewSide from '../PreviewSide';

import { darkTheme, lightTheme } from "../../themes";

const Layout = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [content, setContent] = useState<string>('Placeholder');

    const toggleTheme = () => {
        setTheme(prevState => {
            if (prevState === 'light') {
                return 'dark';
            }

            return 'light';
        })
    };

    return (
        <ThemeProvider theme={theme ==='light' ? lightTheme : darkTheme}>
            <Navbar currentTheme={theme} toggleTheme={toggleTheme} />
            <Split css={{
                display: "flex",
                flexDirection: "row",
                height: "calc(100vh - 3rem)",
            }} sizes={[50, 50]} minSize={300}>
                <InputSide content={content} />
                <PreviewSide content={content} />
            </Split>
        </ThemeProvider>
    );
}

export default Layout;
