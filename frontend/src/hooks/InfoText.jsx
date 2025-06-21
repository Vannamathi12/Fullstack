import { createContext } from 'react';

export const InfoTextContext = createContext();
export const InfoProvider = ({ children }) => {
    const info = { name: 'Vannamathi', age: 20, city: 'Chennai' };
    return (
        <InfoTextContext.Provider value={info}>
            {children}
        </InfoTextContext.Provider>
    );
};