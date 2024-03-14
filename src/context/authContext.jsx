import React, { createContext, useState, useContext } from 'react';

// Création du contexte d'authentification
const AuthContext = createContext();

// Hook personnalisé pour accéder au contexte d'authentification
export const useAuth = () => {
  return useContext(AuthContext);
};

// Composant fournisseur du contexte
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Mettre en place la logique d'authentification ici
    // Par exemple, vérifier les informations d'identification, JWT, etc.
    // Ici, nous utilisons une méthode simplifiée en définissant isAuthenticated à true
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Logique de déconnexion : réinitialiser l'état d'authentification
    setIsAuthenticated(false);
  };

  const authContextValue = {
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
