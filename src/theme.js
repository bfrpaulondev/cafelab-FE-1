// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        primary: {
            100: '#4A5568',
            200: '#bd927c',
            300: '#fff5dd',
        },
        accent: {
            100: '#D9BF9A',
            200: '#776240',
        },
        text: {
            100: '#3E2F2A',
            200: '#695852',
        },
        bg: {
            100: '#ffffff',
            200: '#f5f5f5',
            300: '#cccccc',
        },
    },
});

export default theme;
