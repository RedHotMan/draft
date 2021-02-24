import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        navbar: {
            background: string;
            color: string;
        };
        toolbar: {
            background: string;
        };
        sides: {
            background: string;
            color: string;
        };
    }
}
