import { useContext } from 'react';

import { UserContext } from '../Contexts';

export const useUser = () => useContext(UserContext);