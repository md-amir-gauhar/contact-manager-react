import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
  contacts: [
    {
      id: 1,
      name: "Amir",
      email: "gauharamir15@gmail.com"
    },
    {
      id: 2,
      name: "Joe",
      email: "joe@gmail.com"
    },
    {
      id: 3,
      name: "Goku",
      email: "saiyan.goku@gmail.com"
    }
  ],
}

export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
