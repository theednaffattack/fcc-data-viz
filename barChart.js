let { data: local_data } = {
  id: 120140,
  source_name: "Federal Reserve Economic Data",
  source_code: "FRED",
  code: "GDP",
  name: "Gross Domestic Product, 1 Decimal",
  urlize_name: "Gross-Domestic-Product-1-Decimal",
  display_url: "http://research.stlouisfed.org/fred2/data/GDP.txt",
  description:
    "Units: Billions of Dollars\nSeasonal Adjustment: Seasonally Adjusted Annual Rate\nNotes: A Guide to the National Income and Product Accounts of the United States (NIPA) - (http://www.bea.gov/national/pdf/nipaguid.pdf)",
  updated_at: "2015-12-14T20:00:28.561Z",
  frequency: "quarterly",
  from_date: "1947-01-01",
  to_date: "2015-07-01",
  column_names: ["DATE", "VALUE"],
  private: false,
  type: null,
  premium: false,
  data: "./data/barchart_data.json"
};

var barHeight = 300;

const svgWidth = 800;
//   const svgHeight = 500;

const barMargin = 5;

const barWidth = svgWidth / local_data.length; // width of the svg container / number of data points

const min = d3.min(local_data, d => d[1]);
const max = d3.max(local_data, d => d)[1];

// extent should give the min and max of our data set
const extent = d3.extent(local_data, d => d[1]);

const margin = {
  left: 40,
  right: 40,
  top: 40,
  bottom: 40
};

const height = 400 - margin.top - margin.bottom;

//   const xScale = d3.scaleOrdinal().rangeRoundBands([0, barWidth]);

// scales
const xExtent = d3.extent(local_data, d => {
  return new Date(d[0]);
});
const yExtent = d3.extent(local_data, d => d[1]);

const xScale = d3
  .scaleTime()
  .domain(xExtent)
  .range([0, svgWidth]);

const tip = d3
  .tip()
  .attr("class", "d3-tip")
  .attr("id", "tooltip")
  // .attr("data-date", d => d)
  .offset([-10, 0])
  .html(d => {
    let formatNumber = d3.format(",.0f");
    d3.select("#tooltip").attr("data-date", d[0]);
    return (
      "<span style='color: red'><strong>GDP:</strong> $" +
      formatNumber(d[1]) +
      " billion " +
      d[0] +
      "</span>"
    );
  });

const yScale = d3
  .scaleLinear()
  .domain([0, yExtent[1]]) // input
  .range([height, 0]); // output

const xAxis = d3
  .axisBottom()
  .tickFormat(d3.timeFormat("%Y"))
  .scale(xScale);

const yAxis = d3.axisLeft().scale(yScale);

const svg = d3
  .select(".barChartContainer")
  .append("svg")
  .attr("width", svgWidth + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .attr("id", "title")
  .append("g")
  .attr("transform", "translate(" + [margin.left - 1, margin.top] + ")");
svg.call(tip);
svg
  .append("g")
  // .attr("transform", "translate(40,0)")
  .attr("transform", "translate(" + [0, 0] + ")")
  .attr("id", "y-axis")
  .call(yAxis);

svg
  .append("g")
  .attr("transform", "translate(" + [0, height] + ")")
  .attr("id", "x-axis")
  .call(xAxis);

const xAxisMargin = 40;

const bar2 = d3
  .select("svg") // select the `svg` element (pre-existing)
  .selectAll("rect") // grab all of the `rects` inside

  .data(local_data) // bind the data? append the data?
  .enter() // enter this to the DOM
  .append("rect") // append our data as rects
  .attr("x", (d, i) => i * barWidth)
  .attr("y", (d, i) => yScale(d[1]) + margin.bottom) // this is avoid upside down chart
  .attr("height", d => {
    return height - yScale(d[1]);
  }) // the height of each data point is equal to the data
  .attr("width", barWidth) // the width is 20 -1 for each data point
  .attr("class", "bar")
  .attr("data-date", d => d[0])
  .attr("data-gdp", d => d[1])
  .attr("fill", d => (d[1] === 120 ? "crimson" : "palevioletred"))
  .attr("transform", "translate(" + [margin.left, 0] + ")") // make room for y-axis
  .on("mouseover", tip.show)
  .on("mouseout", tip.hide);
// .attr("stroke", "white")
// .append("text")
// .attr("class", "label")
// .attr("x", d => d[1])

//   xScale.domain(local_data.map(d => d));
yScale.domain([0, d3.max(local_data, d => d.quantity)]);
// .attr("transform", function(d, i) {
//   return "translate(" + i * barHeight + ", 0)";
// });
