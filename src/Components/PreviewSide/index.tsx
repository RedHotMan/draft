/** @jsxImportSource @emotion/react */
import React, { useEffect }  from 'react';
import marked from "marked";
import Prism from "prismjs";
import '../../prism.css';

import SideContainer from "../SideContainer";
import Toolbar from "../Toolbar";

import { Preview } from "./style";

interface props {
    content: string
}

const PreviewSide: React.FC<props> = ({ content }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, [content]);

    return (
        <SideContainer>
            <Toolbar title={'Preview'} />
            <Preview dangerouslySetInnerHTML={{ __html: marked(content)}} />
        </SideContainer>
    );
};

export default PreviewSide;
