/////////D3 Horizonal Lengend 1///////////////////////////
var svgLegned4 = d3
  .select(".legend4")
  .append("svg")
  .attr("width", width)
  .attr("height", height - 50);

var dataL = 0;
var offset = 80;

var legend4 = svgLegned4
  .selectAll(".legends4")
  .data(legendVals2)
  .enter()
  .append("g")
  .attr("class", "legends4")
  .attr("transform", function(d, i) {
    if (i === 0) {
      dataL = d.length + offset;
      return "translate(0,0)";
    } else {
      var newdataL = dataL;
      dataL += d.length + offset;
      return "translate(" + newdataL + ",0)";
    }
  });

legend4
  .append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", 10)
  .attr("height", 10)
  .style("fill", function(d, i) {
    return color(i);
  });

legend4
  .append("text")
  .attr("x", 20)
  .attr("y", 10)
  //.attr("dy", ".35em")
  .text(function(d, i) {
    return d;
  })
  .attr("class", "textselected")
  .style("text-anchor", "start")
  .style("font-size", 15);
