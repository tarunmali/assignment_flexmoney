import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(sessionStorage.getItem('accessToken'));

//   const updateAccessToken = (newToken) => {
//     setAccessToken(newToken);
//     sessionStorage.setItem('accessToken', newToken);
//   };

  return (
    <AuthContext.Provider value={{ accessToken,  setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
