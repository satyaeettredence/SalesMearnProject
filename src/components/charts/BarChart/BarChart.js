import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './BarChart.css';

const BarChart = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // Clear any existing content

    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = d3.scaleBand()
      .domain(data.map(d => d.product))
      .range([0, innerWidth])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.sales)])
      .nice()
      .range([innerHeight, 0]);

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    g.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale));

    g.append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(yScale));

    g.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d.product))
      .attr('y', d => yScale(d.sales))
      .attr('width', xScale.bandwidth())
      .attr('height', d => innerHeight - yScale(d.sales))
      .attr('fill', 'steelblue');
  }, [data]);

  return (
    <div>
<h1>Sales Bar Chart</h1>
    <svg
      ref={svgRef}
      width={800}
      height={400}
    />
    </div>
  );
};

export default BarChart;
