import React, { createContext, useState } from 'react';

// Creamos un contexto para el idioma
export const HostContext = createContext();

// El proveedor del contexto que contendrá el estado del idioma
export const HostProvider = ({ children }) => {
  const [language, setLanguage] = useState('spanish'); 
  const [selectedMicroFront, setSelectedMicroFront] = useState(null);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const contextValue ={
    language,
    changeLanguage, 
    selectedMicroFront, 
    setSelectedMicroFront
  }
  console.log('idMicrofront', selectedMicroFront)
  return (
    <HostContext.Provider value={contextValue}>
      {children}
    </HostContext.Provider>
  );
};