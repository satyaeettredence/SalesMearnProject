import React from 'react';
import AreaChart from '../charts/AreaChart/AreaChart'
import StockProducts from './ProductList/ProductList'

function Inventory() {

  const sampleAreaData = [
    { date: '2024-01-01', quantity: 50 },
    { date: '2024-02-01', quantity: 70 },
    { date: '2024-03-01', quantity: 90 },
    { date: '2024-04-01', quantity: 65 },
    { date: '2024-05-01', quantity: 80 },
  ];

  const sampleProducts = [
    { id: 1, name: 'Widget A', quantity: 5 },
    { id: 2, name: 'Widget B', quantity: 25 },
    { id: 3, name: 'Widget C', quantity: 2 },
    { id: 4, name: 'Widget D', quantity: 15 },
  ];

  const stockThreshold = 10;
  return (
  <div>
    <h1>
    Inventory Area Chart
    </h1>
    <AreaChart data={sampleAreaData} />

    <StockProducts products={sampleProducts} threshold={stockThreshold} />
  </div>
  );
}

export default Inventory;
