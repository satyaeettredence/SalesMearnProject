import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const Heatmap = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    // Clear any existing content
    svg.selectAll('*').remove(); 

    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    // Size of each cell in the grid
    const cellSize = 40; 

    const xScale = d3.scaleBand()
      .domain(data.map(d => d.hour))
      .range([0, width - margin.left - margin.right])
      .padding(0.1);

    const yScale = d3.scaleBand()
      .domain(data.map(d => d.day))
      .range([height - margin.top - margin.bottom, 0])
      .padding(0.1);

    const colorScale = d3.scaleSequential(d3.interpolateViridis)
      .domain([0, d3.max(data, d => d.activity)]);

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    g.selectAll('rect')
      .data(data)
      .enter().append('rect')
      .attr('x', d => xScale(d.hour))
      .attr('y', d => yScale(d.day))
      .attr('width', xScale.bandwidth())
      .attr('height', yScale.bandwidth())
      .attr('fill', d => colorScale(d.activity))
      .attr('stroke', '#ccc');

    g.append('g')
      .attr('transform', `translate(0,${height - margin.top - margin.bottom})`)
      .call(d3.axisBottom(xScale).tickSize(0).tickPadding(10))
      .selectAll('text')
      .attr('transform', 'rotate(-45)')
      .style('text-anchor', 'end');

    g.append('g')
      .call(d3.axisLeft(yScale).tickSize(0).tickPadding(10));

  }, [data]);

  return (
    <svg
      ref={svgRef}
      width={800}
      height={400}
    />
  );
};

export default Heatmap;
