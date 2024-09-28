import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for your context's value
interface MyContextType {
  sharedData: number;
  setSharedData: React.Dispatch<React.SetStateAction<number>>;
}

// Create context with a default value
const MyContext = createContext<MyContextType | undefined>(undefined);

// Create a provider component
export function Provider({ children }: { children: ReactNode }) {
  const [sharedData, setSharedData] = useState<number>(0);

  return (
    <MyContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </MyContext.Provider>
  );
}

// Custom hook to use the MyContext
export function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a Provider');
  }
  return context;
}
