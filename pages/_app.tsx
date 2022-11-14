import React, { useEffect, useState } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import DrawerMenu from '../components/DrawerMenu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import FilterProvider from '../contexts/filter.context.js';
export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {}, []);
    const [isDark, setDark] = useState(false);
    const theme = createTheme({
        palette: {
            mode: isDark ? 'dark' : 'light',
        },
    });
    return (
        <FilterProvider>
            <ThemeProvider theme={theme}>
                <div>
                    <button
                        onClick={(e) => {
                            setDark((p) => !p);
                        }}
                    >
                        Change color
                    </button>
                </div>
                <div>
                    <DrawerMenu setDark={(s: any) => setDark(s)} isDark={isDark}>
                        <CssBaseline />
                        <Component {...pageProps} />
                    </DrawerMenu>
                </div>
            </ThemeProvider>
        </FilterProvider>
    );
}
