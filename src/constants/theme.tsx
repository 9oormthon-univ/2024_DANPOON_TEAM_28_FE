import { createTheme } from '@mui/material';
import React from 'react';

interface ILivelyPrimary {
    '1': string;
    '2': string;
    '3': string;
    '4': string;
}

interface ILivelySecondary {
    A: string;
    B: string;
    C: string;
}

interface ILivelyTypography {
    semiBold?: React.CSSProperties;
    medium?: React.CSSProperties;
    regular?: React.CSSProperties;
    light?: React.CSSProperties;
}

declare module '@mui/material/styles' {
    interface Palette {
        livelyPrimary: ILivelyPrimary;
        livelySecondary: ILivelySecondary;
    }
    interface PaletteOptions {
        livelyPrimary?: ILivelyPrimary;
        livelySecondary?: ILivelySecondary;
    }

    interface TypographyVariants {
        heading1: ILivelyTypography;
        heading2: ILivelyTypography;
        body1: React.CSSProperties;
        body2: React.CSSProperties;
        body3: ILivelyTypography;
        body4: ILivelyTypography;
    }

    interface TypographyVariantsOptions {
        heading1?: ILivelyTypography;
        heading2?: ILivelyTypography;
        body1?: React.CSSProperties;
        body2?: React.CSSProperties;
        body3?: ILivelyTypography;
        body4?: ILivelyTypography;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        poster: true;
        h3: false;
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#57873E',
        },
        livelyPrimary: {
            '1': '#375139',
            '2': '#57873E',
            '3': '#A4C67C',
            '4': '#F0F7E2',
        },
        secondary: {
            main: '#D27B90',
        },
        livelySecondary: {
            A: '#D27B90',
            B: '#E6BAC9',
            C: '#F9F0F5',
        },
    },
    typography: {
        fontFamily: 'SBAggroB, Pretendard',
        heading1: {
            medium: {
                fontFamily: 'SBAggroB',
                fontSize: '1.5rem',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '2rem',
            },
        },
        heading2: {
            medium: {
                fontFamily: 'SBAggroB',
                fontSize: '1.25rem',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '1.75rem',
            },
            light: {
                fontFamily: 'SBAggroB',
                fontSize: '1.25rem',
                fontStyle: 'normal',
                fontWeight: 300,
                lineHeight: '1.75rem',
            },
        },
        body1: {
            fontFamily: 'Pretendard',
            fontSize: '1.25rem',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '1.625rem',
        },
        body2: {
            fontFamily: 'Pretendard',
            fontSize: '1.0625rem',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '1.375rem',
        },
        body3: {
            semiBold: {
                fontFamily: 'Pretendard',
                fontSize: '0.9375rem',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '1.25rem',
            },
            regular: {
                fontFamily: 'Pretendard',
                fontSize: '0.9375rem',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '1.25rem',
            },
        },
        body4: {
            semiBold: {
                fontFamily: 'Pretendard',
                fontSize: '0.75rem',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '1rem',
            },
            regular: {
                fontFamily: 'Pretendard',
                fontSize: '0.75rem',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '1rem',
            },
        },
    },
});

export default theme;
