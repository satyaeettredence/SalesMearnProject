import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const AreaChart = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    // Set up margins and dimensions
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Define scales
    const xScale = d3.scaleTime()
      .domain(d3.extent(data, d => new Date(d.date)))
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.quantity)])
      .nice()
      .range([innerHeight, 0]);

    // Define the area generator
    const area = d3.area()
      .x(d => xScale(new Date(d.date)))
      .y1(d => yScale(d.quantity))
      .y0(yScale(0));

    // Append a group element to the svg
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Append the area path
    g.append('path')
      .datum(data)
      .attr('fill', 'steelblue')
      .attr('d', area);

    // Add x-axis
    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale));

    // Add y-axis
    g.append('g')
      .call(d3.axisLeft(yScale));

  }, [data]);

  return (
    <svg ref={svgRef} width="800" height="400"></svg>
  );
};

export default AreaChart;
