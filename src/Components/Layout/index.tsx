import React  from 'react';

import Split from "react-split";

import { CssBaseline, makeStyles } from "@material-ui/core";

import Navbar from '../Navbar';
import InputSide from '../InputSide';
import PreviewSide from "../PreviewSide";

const useStyles = makeStyles(() => ({
    container: {
        height: "100vh",
    },
    splitContainer: {
        display: "flex",
        flexDirection: "row",
        height: "calc(100vh - 48px)",
    },
}));

const Layout = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <CssBaseline />
            <Navbar />
            <Split className={classes.splitContainer} sizes={[50, 50]} minSize={300}>
                <InputSide />
                <PreviewSide />
            </Split>
        </div>
    );
}

export default Layout;
