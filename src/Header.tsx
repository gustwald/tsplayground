import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Navigation } from './components/Navigation';
import { themeString } from './Contexts';
import { Login } from './components/Login';
import { Switch } from './Switch';

export const Header: React.FC = () => {
    // ! is to till TS that theme wont be undefined
    const { theme, setTheme } = useTheme()!;
    const [, setStoreTheme] = useLocalStorage('theme', theme);

    const setStorageTheme = (storedTheme: string) => {
        setTheme(storedTheme);
        setStoreTheme(storedTheme);
    }
    return (
        <header className={`header theme theme--${theme}`}>
            <Login />
            <p>Theme is {theme}</p>
            <Switch handleChange={e => setStorageTheme(e.currentTarget.value)} defaultValue={theme} values={Object.values(themeString)} />
            <Navigation />
        </header>
    );
}