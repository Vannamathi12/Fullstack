import { createContact } from "react";
export const UserContact=createContext();

export const UserProvider=({childern})=>{
    const  name='vannu'
    return (
        <UserContext.Provider value={name}>
             {childern}
        </UserContext.Provider>
    )
}