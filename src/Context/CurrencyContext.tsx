import  { createContext, useContext, useState } from 'react';


const CurrencyContext = createContext({
  currency: 'JPY',
  toggleCurrency: () => { }
});

export const CurrencyProvider = ({ children }:any) => {
  const [currency, setCurrency] = useState('JPY');

  const toggleCurrency = () => {
    setCurrency((prevCurrency) => (prevCurrency === 'JPY' ? 'USD' : 'JPY'));
  };

  return ( 
    <CurrencyContext.Provider value={{ currency, toggleCurrency }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export const useCurrency = () => useContext(CurrencyContext);