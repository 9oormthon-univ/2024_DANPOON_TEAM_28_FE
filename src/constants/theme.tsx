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
        heading1Medium: React.CSSProperties;
        heading2Medium: React.CSSProperties;
        heading2Light: React.CSSProperties;
        body1: React.CSSProperties;
        body2: React.CSSProperties;
        body3SemiBold: React.CSSProperties;
        body3Regular: React.CSSProperties;
        body4SemiBold: React.CSSProperties;
        body4Regular: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        heading1Medium?: React.CSSProperties;
        heading2Medium?: React.CSSProperties;
        heading2Light?: React.CSSProperties;
        body1?: React.CSSProperties;
        body2?: React.CSSProperties;
        body3SemiBold?: React.CSSProperties;
        body3Regular?: React.CSSProperties;
        body4SemiBold?: React.CSSProperties;
        body4Regular?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        heading1Medium: true;
        heading2Medium: true;
        heading2Light: true;
        body1: true;
        body2: true;
        body3SemiBold: true;
        body3Regular: true;
        body4SemiBold: true;
        body4Regular: true;
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
        heading1Medium: {
            fontFamily: 'SBAggroB',
            fontSize: '1.5rem',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '2rem',
        },
        heading2Medium: {
            fontFamily: 'SBAggroB',
            fontSize: '1.25rem',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '1.75rem',
        },
        heading2Light: {
            fontFamily: 'SBAggroB',
            fontSize: '1.25rem',
            fontStyle: 'normal',
            fontWeight: 300,
            lineHeight: '1.75rem',
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
        body3SemiBold: {
            fontFamily: 'Pretendard',
            fontSize: '0.9375rem',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '1.25rem',
        },
        body3Regular: {
            fontFamily: 'Pretendard',
            fontSize: '0.9375rem',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '1.25rem',
        },
        body4SemiBold: {
            fontFamily: 'Pretendard',
            fontSize: '0.75rem',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '1rem',
        },
        body4Regular: {
            fontFamily: 'Pretendard',
            fontSize: '0.75rem',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '1rem',
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    heading1Medium: 'h1',
                    heading2Medium: 'h2',
                    heading2Light: 'h2',
                    body1: 'p',
                    body2: 'p',
                    body3SemiBold: 'p',
                    body3Regular: 'p',
                    body4SemiBold: 'p',
                    body4Regular: 'p',
                },
            },
        },
    },
});

export default theme;
