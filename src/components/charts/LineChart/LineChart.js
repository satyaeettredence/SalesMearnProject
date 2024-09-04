
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const LineChart = ({ data }) => {
  const svgRef = useRef(null);
  const width = 800;
  const height = 400;
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    const x = d3.scaleTime()
      .domain(d3.extent(data, d => new Date(d.date)))
      .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.sales)]).nice()
      .range([height - margin.bottom, margin.top]);

    const line = d3.line()
      .x(d => x(new Date(d.date)))
      .y(d => y(d.sales));

    svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)
      .call(d3.axisLeft(y))
      .append('text')
      .attr('fill', '#000')
      .attr('text-anchor', 'middle')
      .attr('x', -margin.left)
      .attr('y', margin.top - 10)
      .text('Sales');

    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickFormat(d3.timeFormat('%b %Y')))
      .append('text')
      .attr('fill', '#000')
      .attr('text-anchor', 'middle')
      .attr('x', width - margin.right)
      .attr('y', margin.bottom - 10)
      .text('Date');

    svg.append('path')
      .data([data])
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('d', line);
      
  }, [data]);

  return (
    <div>
<h1>Line Chart</h1>
   
    <svg ref={svgRef}></svg>
    </div>
  );
};

export default LineChart;
