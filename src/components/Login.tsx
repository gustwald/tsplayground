import React, { useState } from 'react';
import { useUser } from '../hooks/useUser';
import { useFetch } from '../hooks/useFetch';
import { Input } from './Input';

export const Login: React.FC = () => {
    const { user, setUser } = useUser()!;

    const [typedUser, setTypedUser] = useState<string>('');
    const data = useFetch('https://randomuser.me/api/', {})

    const handleOk = () => {
        setUser(typedUser);
    }
    const getRandomUser = () => {
        const { response } = data;
        const randomUser = response!.results[0].name.first;
        setUser(randomUser);
        setTypedUser(randomUser);
    }
    return (
        <div>
            <div>
                <p>Change user</p>
                <Input value={typedUser} handleChange={e => setTypedUser(e.target.value)} />
                <button onClick={() => handleOk()}>ok</button>
                <p>or</p>
                <button onClick={() => getRandomUser()}>Get random user</button>
            </div>
        </div>
    );
}