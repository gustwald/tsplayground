import { createContext } from 'react';

export enum themeString {
    LIGHT = 'light',
    DARK = 'dark',
}

type ThemeContextType = {
    theme: themeString.LIGHT | themeString.DARK;
    setTheme: (value: themeString | string) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type UserContextType = {
    user: string;
    setUser: (value: string) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);