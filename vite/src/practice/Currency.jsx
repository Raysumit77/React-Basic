// src/App.js
import React, { useState, useEffect } from 'react';
import { getExchangeRates } from './api'

const App = () => {
  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [exchangeRates, setExchangeRates] = useState({});
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      const rates = await getExchangeRates(baseCurrency);
      setExchangeRates(rates);
    };
    fetchExchangeRates();
  }, [baseCurrency]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleBaseCurrencyChange = (e) => {
    setBaseCurrency(e.target.value);
  };

  const handleTargetCurrencyChange = (e) => {
    setTargetCurrency(e.target.value);
  };

  useEffect(() => {
    if (exchangeRates[targetCurrency]) {
      const converted = amount * exchangeRates[targetCurrency];
      setConvertedAmount(converted);
    }
  }, [amount, exchangeRates, targetCurrency]);

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <div>
        <input type="number" value={amount} onChange={handleAmountChange} />
        <select value={baseCurrency} onChange={handleBaseCurrencyChange}>
          {/* options for base currency */}
        </select>
        <select value={targetCurrency} onChange={handleTargetCurrencyChange}>
          {/* options for target currency */}
        </select>
      </div>
      <div>
        <p>{`${amount} ${baseCurrency} equals ${convertedAmount} ${targetCurrency}`}</p>
      </div>
    </div>
  );
}

export default App;
