/** @jsxImportSource @emotion/react */
import React  from 'react';
import marked from "marked";

import SideContainer from "../SideContainer";
import Toolbar from "../Toolbar";

import { Preview } from "./style";

interface props {
    content: string
}

marked.setOptions({
    breaks: true,
});

const PreviewSide: React.FC<props> = ({ content }) => {
    return (
        <SideContainer>
            <Toolbar title={'Preview'} />
            <Preview dangerouslySetInnerHTML={{ __html: marked(content)}} />
        </SideContainer>
    );
};

export default PreviewSide;
