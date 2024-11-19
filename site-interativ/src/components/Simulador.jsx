// src/components/Simulador.jsx
import React, { useState, useEffect } from 'react';


const Simulador = () => {
  const [energyUse, setEnergyUse] = useState(100);
  const [renewableRate, setRenewableRate] = useState(0.5);
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    const loadSavings = async () => {
      const data = await fetchSavingsData(energyUse, renewableRate);
      setSavings(data.savings);
    };
    loadSavings();
  }, [energyUse, renewableRate]);

  return (
    <div>
      <h2 >Simulador de Economia de Energia</h2>
      <label>
        Consumo de Energia (kWh):
        <input
          type="number"
          value={energyUse}
          onChange={(e) => setEnergyUse(Number(e.target.value))}
        
        />
      </label>
      <label className="block mb-4">
        Taxa de Energia Renovável:
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={renewableRate}
          onChange={(e) => setRenewableRate(Number(e.target.value))}
        />
      </label>
      <p>Economia Estimada: R$ {savings.toFixed(2)}</p>
    </div>
  );
};

export default Simulador;
