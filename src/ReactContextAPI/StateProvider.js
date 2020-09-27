import React, { createContext, useContext, useReducer } from "react";

// Prepares Data Layer
export const StateContext = createContext();

// Wrap out Application and Provide Access to the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull Information from the Data Layer
export const useStateValue = () => useContext(StateContext);
