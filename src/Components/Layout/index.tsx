/** @jsxImportSource @emotion/react */
import React, { useState, useEffect }  from 'react';

import Split from "react-split";
import { ThemeProvider } from '@emotion/react'

import Navbar from '../Navbar';
import InputSide from '../InputSide';
import PreviewSide from '../PreviewSide';

import placeholder from "../../utils/placeholder";
import { darkTheme, lightTheme } from "../../assets/themes";

const Layout = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [content, setContent] = useState<string>(placeholder);
    const [direction, setDirection] = useState<"horizontal" | "vertical">("horizontal");

    useEffect(() => {
        const changeDirection = () => {
            setDirection(window.innerWidth < 600 ? "vertical" : "horizontal");
        };
        changeDirection();
        window.onresize = changeDirection;
    })

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
                flexDirection: direction === 'horizontal' ? 'row' : 'column',
                height: "calc(100vh - 3rem)",
            }}
                   sizes={[50, 50]}
                   minSize={direction === "horizontal" ? 300 : 100}
                   direction={direction}
                   expandToMin={true}
                   gutterAlign="center"
            >
                <InputSide content={content} setContent={setContent} />
                <PreviewSide content={content} />
            </Split>
        </ThemeProvider>
    );
}

export default Layout;
