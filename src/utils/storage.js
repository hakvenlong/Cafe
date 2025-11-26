import { useState, useEffect } from 'react';

const storage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
            return JSON.parse(storedValue);
        }
        return defaultValue;
    });

    useEffect(() => {
        if (value === undefined) return;
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}

export default storage