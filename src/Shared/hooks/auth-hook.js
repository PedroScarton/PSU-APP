import { useState, useEffect, useCallback } from 'react';

let logoutTimer;

export const useAuth = () => {
    const [token, setToken] = useState(false);
    const [tokenExpirationDate, setTokenExpirationDate] = useState();
    const [userName, setUserName] = useState('');

    const login = useCallback((userName, token, expirationDate) => {
        setUserName(userName);
        const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7);
        setTokenExpirationDate(tokenExpirationDate);
        localStorage.setItem(
            'userData',
            JSON.stringify({ userName: userName, token: token, expiration: tokenExpirationDate.toISOString() })
        );
        setToken(token);
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem('userData');
        setUserName(null);
        setTokenExpirationDate(null);
        setToken(null);
    }, []);

    useEffect(() => {
        if (token && tokenExpirationDate) {
            const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
            logoutTimer = setTimeout(logout, remainingTime);
        } else {
            clearTimeout(logoutTimer);
        }
    }, [token, logout, tokenExpirationDate])

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'));
        if (storedData && storedData.token && new Date(storedData.expiration) > new Date()) {
            login(storedData.userName, storedData.token, new Date(storedData.expiration));
        }
    }, [login])

    return { token, userName, login, logout };
}