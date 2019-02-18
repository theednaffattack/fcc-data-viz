queue()
  .defer(d3.json, "data/heatmap_data.json")
  .await(makeHeatMap);

function makeHeatMap(error, heatData) {
  if (error)
    console.error("ERROR LOADING DATA: \n" + JSON.stringify(error.message));

  const margin = { top: 50, right: 0, bottom: 100, left: 30 };
  const width = 960 - margin.left - margin.right;
  const height = 430 - margin.top - margin.bottom;
  const gridSize = Math.floor(heatData.monthlyVariance.length);

  const itemSize = 10;
  const legendElementWidth = gridSize * 2;
  const buckets = 9;
  const colors = [
    "#ffffd9",
    "#edf8b1",
    "#c7e9b4",
    "#7fcdbb",
    "#41b6c4",
    "#1d91c0",
    "#225ea8",
    "#253494",
    "#081d58"
  ]; // alternatively colorbrewer.YlGnBu[9]
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  const barWidth = width / (heatData.monthlyVariance.length / 12);
  const barHeight = height / 12;

  // X
  const xExtent = d3.extent(heatData.monthlyVariance, d => {
    var date = new Date();

    date.setUTCFullYear(d.year);
    return date;
  });

  const xScale = d3
    .scaleTime()
    .domain(xExtent)
    .range([0, width]);

  const xAxis = d3
    .axisBottom()
    .scale(xScale)
    .tickFormat(d3.timeFormat("%Y"));

  // Y

  let y_first = new Date();
  y_first.setMonth(-1);
  let y_last = new Date();
  y_last.setMonth(11);

  let makeExtent = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(x => {
    let tempDate = new Date(0);
    tempDate.setUTCMonth(x);
    return tempDate;
  });

  const yExtent = d3.extent(makeExtent);
  const yScale = d3
    .scaleTime()
    .domain(yExtent) // input; yExtent[1] = max
    .range([0, height]); // output

  const yAxis = d3
    .axisLeft()
    .scale(yScale)
    .tickFormat(d3.timeFormat("%b"));

  var svg = d3
    .select("#heatmapContainer")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg
    .append("g")
    .attr("class", "xAxis")
    .attr("transform", "translate(0, " + height + ")")
    .call(xAxis);

  svg
    .append("g")
    .attr("class", "yAxis")
    .attr("transform", "translate(0, 0)")
    .call(yAxis);

  var monthLabels = svg
    .selectAll(".monthLabel")
    .data(months)
    .enter()
    .append("text")
    .text(function(d) {
      return d;
    })
    .attr("x", 0)
    .attr("y", function(d, i) {
      return i * gridSize;
    })
    .style("text-anchor", "end")
    .attr("transform", "translate(-6," + gridSize / 1.5 + ")")
    .attr("class", function(d, i) {
      return i >= 0 && i <= 4
        ? "monthLabel mono axis axis-month"
        : "monthLabel mono axis";
    });

  //   var timeLabels = svg
  //     .selectAll(".timeLabel")
  //     .data(times)
  //     .enter()
  //     .append("text")
  //     .text(function(d) {
  //       return d;
  //     })
  //     .attr("x", function(d, i) {
  //       return i * gridSize;
  //     })
  //     .attr("y", 0)
  //     .style("text-anchor", "middle")
  //     .attr("transform", "translate(" + gridSize / 2 + ", -6)")
  //     .attr("class", function(d, i) {
  //       return i >= 7 && i <= 16
  //         ? "timeLabel mono axis axis-year"
  //         : "timeLabel mono axis";
  //     });

  //   var heatmapChart = function(tsvFile) {
  //     d3.tsv(
  //       tsvFile,
  //       function(d) {
  //         return {
  //           day: +d.day,
  //           hour: +d.hour,
  //           value: +d.value
  //         };
  //       },
  //       function(error, data) {
  const colorScale = d3
    .scaleQuantile()
    // .quantile()
    .domain([
      0,
      buckets - 1,
      d3.max(heatData.monthlyVariance, function(d) {
        return d.variance;
      })
    ])
    .range(colors);

  ////////////////

  // let the width of each heat box equal...
  // the width minus margin left minus margin right...
  // divided by the length of the data set (number of years depicted)...
  // divided by 12
  let horizontalMapTile =
    (width - margin.left - margin.right) / (gridSize / 12);
  let verticalMapTile = (height - margin.top - margin.bottom) / 12;

  let min = d3.min(heatData.monthlyVariance, d => d.year);
  //map
  svg
    .append("g")
    // .classed("map", true)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .selectAll("rect")
    .data(heatData.monthlyVariance)
    .enter()
    .append("rect")
    .attr("class", "cell")
    .attr("data-month", function(d) {
      return d.month;
    })
    .attr("data-year", function(d) {
      return d.year;
    })
    .attr("data-temp", function(d) {
      return heatData.baseTemperature + d.variance;
    })

    // returns a value : Integer
    .attr("x", function(d, i) {
      let x = d.year - xExtent[0].getFullYear();
      // console.log(xExtent[0].getFullYear());
      // console.log("x * horizontalMapTile + margin.left");
      // console.log(horizontalMapTile);
      console.log(x * horizontalMapTile);
      console.log(xScale(d.year));
      console.log(x);
      console.log(d.year);
      // console.log(x * horizontalMapTile + margin.left);
      // console.log(verticalMapTile);
      // console.log(verticalMapTile);
      // console.log(d.year);
      return xScale(d.year) + margin.left;
    })

    // // returns undefined
    // .attr("x", (d, i) => {
    //   let x = d.year - xExtent[0];
    //   console.log("x * horizontalMapTile + margin.left");
    //   console.log(d.Year);
    //   return x * horizontalMapTile + margin.left;
    // })
    .attr("y", (d, i) => {
      // console.log("verticalMapTile");
      // console.log(verticalMapTile);

      // console.log(
      //   height -
      //     (margin.bottom + verticalMapTile) -
      //     (d.month - 1) * verticalMapTile
      // );
      return i + verticalMapTile;
    })

    // .attr("y", (d, i) => d.month)
    .attr("width", horizontalMapTile)
    .attr("height", verticalMapTile);

  // .on("mouseover", function(d) {
  //   var date = new Date(d.year, d.month);
  //   var str =
  //     "<span class='date'>" +
  //     d3.time.format("%Y - %B")(date) +
  //     "</span>" +
  //     "<br />" +
  //     "<span class='temperature'>" +
  //     d3.format(".1f")(heatData.baseTemperature + d.variance) +
  //     "&#8451;" +
  //     "</span>" +
  //     "<br />" +
  //     "<span class='variance'>" +
  //     d3.format("+.1f")(d.variance) +
  //     "&#8451;" +
  //     "</span>";
  //   tip.attr("data-year", d.year);
  //   tip.show(str);
  // });
  // .on("mouseout", tip.hide);
}
