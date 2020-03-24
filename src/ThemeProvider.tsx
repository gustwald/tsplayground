import React, { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { ThemeContext } from './Contexts';
import { themeString } from './Contexts';

type Props = {
    children: React.ReactNode
};

export const ThemeProvider = ({
    children
}: Props) => {
    const [theme, setTheme] = useState();
    const [storedTheme,] = useLocalStorage('theme', theme);

    React.useEffect(() => {
        const defaultTheme = themeString.LIGHT;
        setTheme(storedTheme || defaultTheme);
    }, []);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};