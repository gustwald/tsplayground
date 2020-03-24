import React, { useState } from 'react';
import { UserContext } from './Contexts';

type Props = {
    children: React.ReactNode
};

export const UserProvider = ({
    children
}: Props) => {
    const [user, setUser] = useState();

    React.useEffect(() => {
        setUser('lepra');
    }, []);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};