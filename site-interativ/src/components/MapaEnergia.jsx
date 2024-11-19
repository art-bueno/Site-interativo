// src/components/MapaEnergia.jsx
import React, { useEffect, useState } from 'react';


const MapaEnergia = () => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchEnergyData();
      setCountryData(data.countryData);
    };
    loadData();
  }, []);

  return (
    <div>
      <h2>Fontes de Energia por País</h2>
      {countryData.map((country, index) => (
        <div key={index} className="mb-2">
          <p>{country.country}: {country.primarySource}</p>
        </div>
      ))}
    </div>
  );
};

export default MapaEnergia;
