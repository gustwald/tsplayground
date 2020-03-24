import { useContext } from 'react';

import { ThemeContext } from '../Contexts';

export const useTheme = () => useContext(ThemeContext);