import { useState, useEffect } from 'react';

interface Result {
    [index: number]: { name: { first: string } };
}

interface UserData {
    results: Result,
    response: object,
};


export const useFetch = (url: string, options: object) => {
    const [response, setResponse] = useState<UserData>();

    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResponse(json);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, []);
    return { response, error };
};