// import { useEffect, useRef, useState } from "react";
// import * as d3 from "d3";
import  BarChart from '../charts/BarChart/BarChart'
import  PieChart from '../charts/PieChart/pieChart'
import  LineChart from '../charts/LineChart/LineChart'

const Sales=()=>{


  const pieData = [
    { name: 'Product A', value: 40 },
    { name: 'Product B', value: 30 },
    { name: 'Product C', value: 20 },
    { name: 'Product D', value: 10 },
  ];

  const lineChartData = [
    { date: '2023-01-01', sales: 100 },
    { date: '2023-02-01', sales: 120 },
    { date: '2023-03-01', sales: 150 },
    { date: '2023-04-01', sales: 170 },
    { date: '2023-05-01', sales: 160 },
    { date: '2023-06-01', sales: 180 },
    { date: '2023-07-01', sales: 200 },
    { date: '2023-08-01', sales: 220 },
    { date: '2023-09-01', sales: 210 },
    { date: '2023-10-01', sales: 230 },
    { date: '2023-11-01', sales: 250 },
    { date: '2023-12-01', sales: 270 },
  ];

  const barChartData = [
    { product: 'Product A', sales: 5000 },
    { product: 'Product B', sales: 4000 },
    { product: 'Product C', sales: 3000 },
    { product: 'Product D', sales: 2500 },
    { product: 'Product E', sales: 2200 },
    { product: 'Product F', sales: 2000 },
    { product: 'Product G', sales: 1800 },
    { product: 'Product H', sales: 1600 },
    { product: 'Product I', sales: 1500 },
    { product: 'Product J', sales: 1400 }
  ];

    return(
        <div>

        <BarChart data={barChartData} />
        <PieChart  data ={pieData}/>
        <LineChart data={lineChartData} />
    </div>
  );
  }
  
  export default Sales;