import React, {useState, createContext} from 'react';

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [userList, setUserList] = useState([]);

    return ( 
        <DataContext.Provider value={[userList, setUserList]}>
            {children}
        </DataContext.Provider>
     );
}