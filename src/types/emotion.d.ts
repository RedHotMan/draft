import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        navbar: {
            background: string;
            color: string;
        },
        toolbar: {
            background: string;
            color: string;
        };
    }
}
