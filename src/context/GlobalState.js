import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
  contacts: [],
}

export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addContacts(contact) {
    dispatch({
      type: 'ADD_CONTACT',
      payload: contact,
    })
  }

  function deleteContacts(id) {
    dispatch({
      type: 'DELETE_CONTACT',
      payload: id,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        contacts: state.contacts,
        addContacts,
        deleteContacts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
