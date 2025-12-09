import { createContext, useContext, useState } from 'react';

// 1. Créer le contexte
export const CounterContext = createContext();

// 2. Créer le Provider
export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}



// 3. Hook pour utiliser le contexte
export function useCounter() {
  return useContext(CounterContext);
}
