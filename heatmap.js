queue()
  .defer(d3.json, "data/heatmap_data.json")
  .await(makeHeatMap);

function makeHeatMap(error, heatData) {
  if (error)
    console.error("ERROR LOADING DATA: \n" + JSON.stringify(error.message));

  console.log(5 * Math.ceil(heatData.monthlyVariance.length / 12));
  const margin = { top: 50, right: 0, bottom: 100, left: 30 };
  const width = 960 - margin.left - margin.right;
  const height = 430 - margin.top - margin.bottom;
  const gridSize = Math.floor(heatData.monthlyVariance.length);
  console.log("gridSize");
  console.log(gridSize);
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
    return d.year;
  });

  // const xAxis = d3.svg.axis.scale(xScale).orient("bottom");
  //ordinal scale
  // var xScale = d3.scale
  //   .ordinal()
  //   .domain(
  //     data.monthlyVariance.map(function(val) {
  //       return val.year;
  //     })
  //   )
  //   .rangeRoundBands([0, width], 0, 0);

  const xScale = d3
    .scaleOrdinal()
    .domain(xExtent)
    .range([0, width]);

  const xAxis = d3
    .axisBottom()
    .scale(xScale)
    .tickValues((d, i) => {
      console.log("look at d");
      console.log(d);
      d.filter(x => {
        console.log("x");
        console.log(x);
        x % 10 === 0;
      });
    })
    .tickFormat(d3.format("d"));

  // Y
  const yExtent = d3.extent([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  const yScale = d3
    .scaleOrdinal()
    .domain(yExtent) // input; yExtent[1] = max
    .range([0, height]); // output

  const yAxis = d3
    .axisLeft()
    // .tickFormat()
    .scale(yScale);

  // const yAxis = d3.svg.axis
  //   .scale(yScale)
  //   .orient("left")
  //   .tick(12);

  //   console.log(xExtent);
  //   console.log(yExtent);
  //   console.log(new Set(heatData.monthlyVariance));
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
  // console.log(colorScale(85));

  ////////////////

  //map
  svg
    .append("g")
    .classed("map", true)
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
    .attr("x", (d, i) => {
      console.log("xScale(d.year)");
      console.log(xScale(d.year));
      return xScale(d.year);
    })
    .attr("y", (d, i) => yScale(d.month))
    .attr("width", (d, i) => 1)
    .attr("height", (d, i) => 10)
    // .attr({
    //   x: function(d, i) {
    //     return xScale(d.year);
    //   },
    //   y: function(d, i) {
    //     return yScale(d.month);
    //   },
    //   width: function(d, i) {
    //     return xScale.rangeBand(d.year);
    //   },
    //   height: function(d, i) {
    //     return yScale.rangeBand(d.month);
    //   }
    // })
    // .attr("fill", function(d, i) {
    //   return legendThreshold(heatData.baseTemperature + d.variance);
    // })
    .on("mouseover", function(d) {
      var date = new Date(d.year, d.month);
      var str =
        "<span class='date'>" +
        d3.time.format("%Y - %B")(date) +
        "</span>" +
        "<br />" +
        "<span class='temperature'>" +
        d3.format(".1f")(heatData.baseTemperature + d.variance) +
        "&#8451;" +
        "</span>" +
        "<br />" +
        "<span class='variance'>" +
        d3.format("+.1f")(d.variance) +
        "&#8451;" +
        "</span>";
      tip.attr("data-year", d.year);
      tip.show(str);
    });
  // .on("mouseout", tip.hide);

  ////////////////

  // var cards = svg
  //   .selectAll(".year")
  //   .data(heatData.monthlyVariance, function(d) {
  //     return d.year;
  //   });

  // cards.append("title");
  // console.log("gridSize");
  // console.log(Math.round((width / gridSize) * 10));
  // cards
  //   .enter()
  //   .append("rect")
  //   .attr("x", function(d, i) {
  //     // console.log(Math.round((width / gridSize) * 10));
  //     console.log(d.variance);
  //     console.log(colorScale(d.variance));
  //     return Math.round((width / gridSize) * 10);
  //   })
  //   .attr("y", function(d) {
  //     return (d.month - 1) * gridSize;
  //   })
  //   .attr("rx", (d, i) => i * 3)
  //   .attr("ry", 0)
  //   .attr("class", "year bordered")
  //   .attr("width", gridSize)
  //   .attr("height", gridSize)
  //   .style("fill", d => colorScale(d.variance));

  // cards
  //   .transition()
  //   .duration(1000)
  //   .style("fill", function(d) {
  //     return colorScale(d.variance);
  //   });

  // cards.select("title").text(function(d) {
  //   return d.value;
  // });

  // cards.exit().remove();

  // var legend = svg
  //   .selectAll(".legend")
  //   .data([0].concat(colorScale.quantiles()), function(d) {
  //     console.log("d");
  //     console.log(d);
  //     return d;
  //   });

  // legend
  //   .enter()
  //   .append("g")
  //   .attr("class", "legend");

  // legend
  //   .append("rect")
  //   .attr("x", function(d, i) {
  //     return 30 * i;
  //   })
  //   .attr("y", height)
  //   .attr("width", (d, i) => i * 30) // legendElementWidth
  //   .attr("height", 40) // gridSize / 2
  //   .style("fill", function(d, i) {
  //     return colors[i];
  //   });

  // legend
  //   .append("text")
  //   .attr("class", "mono")
  //   .text(function(d) {
  //     return "≥ " + Math.round(d);
  //   })
  //   .attr("x", function(d, i) {
  //     return legendElementWidth * i;
  //   })
  //   .attr("y", height + gridSize);

  // legend.exit().remove();
  // }
  //   );
  // };

  //   heatmapChart(datasets[0]);

  //   var datasetpicker = d3
  //     .select("#dataset-picker")
  //     .selectAll(".dataset-button")
  //     .data(datasets);

  //   datasetpicker
  //     .enter()
  //     .append("input")
  //     .attr("value", function(d) {
  //       return "Dataset " + d;
  //     })
  //     .attr("type", "button")
  //     .attr("class", "dataset-button")
  //     .on("click", function(d) {
  //       heatmapChart(d);
  //     });
}
