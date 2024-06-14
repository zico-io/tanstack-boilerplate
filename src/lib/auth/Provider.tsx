import React, { createContext } from 'react'
import { IAuthContext } from '../interfaces'

export const AuthContext = createContext<IAuthContext | undefined>(undefined)
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: false,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
