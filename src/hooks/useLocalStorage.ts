import { useState } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T): [string, typeof setValue] => {
    const [storedValue, setStoredValue] = useState<string>(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        catch (e) {
            console.log(e);
            return initialValue;
        }
    })

    const setValue = (value: T): void => {
        try {
            const valueToStore = value instanceof  Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            localStorage.setItem(key, JSON.stringify(valueToStore));
        }
        catch (e) {
            console.log(e)
        }
    }

    return [storedValue ,setValue]
}
