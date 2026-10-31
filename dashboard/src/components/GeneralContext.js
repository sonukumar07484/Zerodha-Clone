// ✅ GeneralContext.js
import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  // ... aap state ya functions yahan likhte hain

  return (
    <GeneralContext.Provider value={{}}>
      {children} {/* 👈 YE 'children' HONA BOHT ZARURI HAI */}
    </GeneralContext.Provider>
  );
};