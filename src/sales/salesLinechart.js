import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";


const SalesLineChart=()=>{

    const [data, setData] = useState([25, 70, 45, 60, 46, 44,60,32,80,40,100]);
    const svgRef = useRef();

    useEffect(()=>{
  
         // setting up svg
    const w = 400;
    const h = 200;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible")
      .style("background", "#c5f6fa")

  // setting the scaleing
    // xscales
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);
    //yscales
    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);


     //  Setup functions to draw Lines ---------------//
     const generateScaledLine = d3
     .line()
     .x((d, i) => xScale(i))
     .y(yScale)
     .curve(d3.curveCardinal);

         // setting the axes
    const xAxis = d3
    .axisBottom(xScale)
    .ticks(1 + data.length)
    .tickFormat((i) => i + 1);
  const yAxis = d3.axisLeft(yScale).ticks(7);
  // drawing the axes on the svg
  svg.append("g").call(xAxis).attr("transform", `translate(0,${h})`);
  svg.append("g").call(yAxis);

   // setting up the data for the svg
   svg
   .selectAll(".line")
   .data([data])
   .join("path")
   .attr("d", (d) => generateScaledLine(d))
   .attr("fill", "none")
   .attr("stroke", "black");

    },[data])

    return(
        <div>
        <h2> Sales Line Charts</h2>
      <svg ref={svgRef} style={{ margin: "100px", display: "block" }}></svg>
    </div>
  );
  }
  
  export default SalesLineChart;