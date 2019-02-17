// 20190210020706
// https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json

let = local_scatterplot_data = [
  {
    Time: "36:50",
    Place: 1,
    Seconds: 2210,
    Name: "Marco Pantani",
    Year: 1995,
    Nationality: "ITA",
    Doping: "Alleged drug use during 1995 due to high hematocrit levels",
    URL: "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
  },
  {
    Time: "36:55",
    Place: 2,
    Seconds: 2215,
    Name: "Marco Pantani",
    Year: 1997,
    Nationality: "ITA",
    Doping: "Alleged drug use during 1997 due to high hermatocrit levels",
    URL: "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
  },
  {
    Time: "37:15",
    Place: 3,
    Seconds: 2235,
    Name: "Marco Pantani",
    Year: 1994,
    Nationality: "ITA",
    Doping: "Alleged drug use during 1994 due to high hermatocrit levels",
    URL: "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
  },
  {
    Time: "37:36",
    Place: 4,
    Seconds: 2256,
    Name: "Lance Armstrong",
    Year: 2004,
    Nationality: "USA",
    Doping: "2004 Tour de France title stripped by UCI in 2012",
    URL:
      "https://en.wikipedia.org/wiki/History_of_Lance_Armstrong_doping_allegations"
  },
  {
    Time: "37:42",
    Place: 5,
    Seconds: 2262,
    Name: "Jan Ullrich",
    Year: 1997,
    Nationality: "GER",
    Doping: "Confessed later in his career to doping",
    URL:
      "https://en.wikipedia.org/wiki/Jan_Ullrich#Operaci.C3.B3n_Puerto_doping_case"
  },
  {
    Time: "38:05",
    Place: 6,
    Seconds: 2285,
    Name: "Lance Armstrong",
    Year: 2001,
    Nationality: "USA",
    Doping: "2001 Tour de France title stripped by UCI in 2012",
    URL:
      "https://en.wikipedia.org/wiki/History_of_Lance_Armstrong_doping_allegations"
  },
  {
    Time: "38:14",
    Place: 7,
    Seconds: 2294,
    Name: "Miguel Indurain",
    Year: 1995,
    Nationality: "ESP",
    Doping: "1994 Failed test for salbutemol, not a banned drug at that time",
    URL:
      "http://www.independent.co.uk/sport/drugs-in-sport-indurain-allowed-to-use-banned-drug-1379584.html"
  },
  {
    Time: "38:14",
    Place: 8,
    Seconds: 2294,
    Name: "Alex Zülle",
    Year: 1995,
    Nationality: "SUI",
    Doping: "Confessed in 1998 to taking EPO",
    URL: "https://en.wikipedia.org/wiki/Alex_Z%C3%BClle#Festina_affair"
  },
  {
    Time: "38:16",
    Place: 9,
    Seconds: 2296,
    Name: "Bjarne Riis",
    Year: 1995,
    Nationality: "DEN",
    Doping: "Alleged drug use during 1995 due to high hermatrocite levels",
    URL: "https://en.wikipedia.org/wiki/Bjarne_Riis#Doping_allegations"
  },
  {
    Time: "38:22",
    Place: 10,
    Seconds: 2302,
    Name: "Richard Virenque",
    Year: 1997,
    Nationality: "FRA",
    Doping: "In 2000 confessed to doping during his career",
    URL: "https://en.wikipedia.org/wiki/Richard_Virenque#Festina_affair"
  },
  {
    Time: "38:36",
    Place: 11,
    Seconds: 2316,
    Name: "Floyd Landis",
    Year: 2006,
    Nationality: "USA",
    Doping: "Stripped of 2006 Tour de France title",
    URL: "https://en.wikipedia.org/wiki/Floyd_Landis_doping_case"
  },
  {
    Time: "38:36",
    Place: 12,
    Seconds: 2316,
    Name: "Andreas Klöden",
    Year: 2006,
    Nationality: "GER",
    Doping: "Alleged use of illegal blood transfusions in 2006",
    URL:
      "https://en.wikipedia.org/wiki/Andreas_Kl%C3%B6den#2009_Doping_allegations"
  },
  {
    Time: "38:40",
    Place: 13,
    Seconds: 2320,
    Name: "Jan Ullrich",
    Year: 2004,
    Nationality: "GER",
    Doping: "Confessed later in his career to doping",
    URL:
      "https://en.wikipedia.org/wiki/Jan_Ullrich#Operaci.C3.B3n_Puerto_doping_case"
  },
  {
    Time: "38:44",
    Place: 14,
    Seconds: 2324,
    Name: "Laurent Madouas",
    Year: 1995,
    Nationality: "FRA",
    Doping: "Tested positive for Salbutemol in 1994, suspended for 1 month",
    URL: "http://www.dopeology.org/incidents/Madouas-positive/"
  },
  {
    Time: "38:55",
    Place: 15,
    Seconds: 2335,
    Name: "Richard Virenque",
    Year: 1994,
    Nationality: "FRA",
    Doping: "In 2000 confessed to doping during his career",
    URL: "https://en.wikipedia.org/wiki/Richard_Virenque#Festina_affair"
  },
  {
    Time: "39:01",
    Place: 16,
    Seconds: 2341,
    Name: "Carlos Sastre",
    Year: 2006,
    Nationality: "ESP",
    Doping: "",
    URL: ""
  },
  {
    Time: "39:09",
    Place: 17,
    Seconds: 2349,
    Name: "Iban Mayo",
    Year: 2003,
    Nationality: "ESP",
    Doping: "Failed doping test in 2007 Tour de France",
    URL: "https://en.wikipedia.org/wiki/Iban_Mayo"
  },
  {
    Time: "39:12",
    Place: 18,
    Seconds: 2352,
    Name: "Andreas Klöden",
    Year: 2004,
    Nationality: "GER",
    Doping: "Alleged doping during 2006 Tour de France",
    URL: "https://en.wikipedia.org/wiki/Operaci%C3%B3n_Puerto_doping_case"
  },
  {
    Time: "39:14",
    Place: 19,
    Seconds: 2354,
    Name: "Jose Azevedo",
    Year: 2004,
    Nationality: "POR",
    Doping: "Implicated in the Operación Puerto doping case",
    URL: "https://en.wikipedia.org/wiki/Operaci%C3%B3n_Puerto_doping_case"
  },
  {
    Time: "39:15",
    Place: 20,
    Seconds: 2355,
    Name: "Levi Leipheimer",
    Year: 2006,
    Nationality: "USA",
    Doping:
      "Testified in 2012 to doping during his time with US Postal Service ",
    URL:
      "http://www.wsj.com/articles/SB10000872396390444799904578048352672452328"
  },
  {
    Time: "39:22",
    Place: 21,
    Seconds: 2362,
    Name: "Francesco Casagrande",
    Year: 1997,
    Nationality: "ITA",
    Doping: "Positive testosterone test in 1998",
    URL: "http://autobus.cyclingnews.com/results/1998/sep98/sep2.shtml"
  },
  {
    Time: "39:23",
    Place: 22,
    Seconds: 2363,
    Name: "Nairo Quintana",
    Year: 2015,
    Nationality: "COL",
    Doping: "",
    URL: ""
  },
  {
    Time: "39:23",
    Place: 23,
    Seconds: 2363,
    Name: "Bjarne Riis",
    Year: 1997,
    Nationality: "DEN",
    Doping: "Alleged drug use during 1995 due to high hermatrocite levels",
    URL: "https://en.wikipedia.org/wiki/Bjarne_Riis#Doping_allegations"
  },
  {
    Time: "39:30",
    Place: 24,
    Seconds: 2370,
    Name: "Miguel Indurain",
    Year: 1994,
    Nationality: "ESP",
    Doping: "1994 Failed test for salbutemol, not a banned drug at that time",
    URL:
      "http://www.independent.co.uk/sport/drugs-in-sport-indurain-allowed-to-use-banned-drug-1379584.html"
  },
  {
    Time: "39:30",
    Place: 25,
    Seconds: 2370,
    Name: "Luc Leblanc",
    Year: 1994,
    Nationality: "FRA",
    Doping: "Admitted to using epo and amphetimines throughout 1994 ",
    URL: "http://www.dopeology.org/people/Luc_Leblanc/"
  },
  {
    Time: "39:32",
    Place: 26,
    Seconds: 2372,
    Name: "Carlos Sastre",
    Year: 2008,
    Nationality: "ESP",
    Doping: "",
    URL: ""
  },
  {
    Time: "39:37",
    Place: 27,
    Seconds: 2377,
    Name: "Vladimir Poulnikov",
    Year: 1994,
    Nationality: "UKR",
    Doping: "",
    URL: ""
  },
  {
    Time: "39:40",
    Place: 28,
    Seconds: 2380,
    Name: "Giuseppe Guerini",
    Year: 2004,
    Nationality: "ITA",
    Doping: "",
    URL: ""
  },
  {
    Time: "39:41",
    Place: 29,
    Seconds: 2381,
    Name: "Santos Gonzalez",
    Year: 2004,
    Nationality: "ESP",
    Doping: "High Hematocrit during 2005 season, removed by team management",
    URL: "http://www.cyclingnews.com/news/santos-gonzalez-sacked-by-phonak/"
  },
  {
    Time: "39:41",
    Place: 30,
    Seconds: 2381,
    Name: "Vladimir Karpets",
    Year: 2004,
    Nationality: "RUS",
    Doping: "Made payments to Ferrari, but no charges filed",
    URL: "http://www.dopeology.org/incidents/Ferrari-investigation/"
  },
  {
    Time: "39:45",
    Place: 31,
    Seconds: 2385,
    Name: "Fernando Escartin",
    Year: 1995,
    Nationality: "ESP",
    Doping: "Implicated in Giardini Margherita Raid in 1998 as a 'victim' ",
    URL:
      "http://www.dopeology.org/incidents/Giardini-Margherita-raid-%5bBologna%5d/"
  },
  {
    Time: "39:47",
    Place: 32,
    Seconds: 2387,
    Name: "Denis Menchov",
    Year: 2006,
    Nationality: "RUS",
    Doping: "",
    URL: ""
  },
  {
    Time: "39:47",
    Place: 33,
    Seconds: 2387,
    Name: "Michael Rasmussen",
    Year: 2006,
    Nationality: "DEN",
    Doping: "Admitted to doping with multiple substances 1998-2010",
    URL: "http://www.dopeology.org/people/Michael_Rasmussen/"
  },
  {
    Time: "39:47",
    Place: 34,
    Seconds: 2387,
    Name: "Pietro Caucchioli",
    Year: 2006,
    Nationality: "ITA",
    Doping: "Associated with Mantova investigation, charges dropped",
    URL:
      "http://www.cyclingnews.com/news/italian-judge-set-to-decide-if-32-named-in-mantova-doping-investigation-should-go-on-trial/"
  },
  {
    Time: "39:50",
    Place: 35,
    Seconds: 2390,
    Name: "Nairo Quintana",
    Year: 2013,
    Nationality: "COL",
    Doping: "",
    URL: ""
  }
];


var colorScale = d3.scaleOrdinal(d3["schemeCategory10"])

var scatterplotHeight = 300;

const svgWidth = 800;
//   const svgHeight = 500;

const scatterplotMargin = 5;

const scatterplotWidth = svgWidth / local_scatterplot_data.length; // width of the svg container / number of data points

const min = d3.min(local_scatterplot_data, d => d["Year"]);
const max = d3.max(local_scatterplot_data, d => d["Year"]);

// extent should give the min and max of our data set
const extent = d3.extent(local_scatterplot_data, d => d["Year"]);

const margin = {
  left: 60,
  right: 40,
  top: 40,
  bottom: 40
}; 

const height = 700 - margin.top - margin.bottom
const width = 800 - margin.left - margin.right


// X
const xExtent = d3.extent(local_scatterplot_data, d => {
  let formatNumber = d3.format(".0f");
  return d["Year"];
});

console.log("xExtent")
console.log(xExtent)

const xValue = function(d) {
  return d;
};

const xScale = d3
  .scaleLinear()
  .domain(xExtent)
  .range([0, width]);

const xMap = function(d) {
  return xScale(xValue(d));
};

const xAxis = d3.axisBottom().scale(xScale).tickFormat(d3.format("d"));


// Y
const yValue = function(d) {
  let splitArr = d.split(":");
  let newDate = new Date(Date.UTC(1977, 01, 13, 10, splitArr[0], splitArr[1]));
  return newDate;
};
let formatHourMinutes = d3.timeFormat("%M:%S");

const yExtent = d3.extent(local_scatterplot_data, d => {
  let splitArr = d.Time.split(":");
  let newDate = new Date(Date.UTC(1977, 01, 13, 10, splitArr[0], splitArr[1]));
  return newDate;
});

const yScale = d3
  .scaleTime()
  .domain(yExtent) // input; yExtent[1] = max
  .range([0, height]); // output

const yMap = function(d) {
  return yScale(yValue(d));
};

const yAxis = d3
  .axisLeft()
  .tickFormat(formatHourMinutes)
  .scale(yScale);

const svg = d3
  .select(".scatterPlotChartContainer")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .attr("id", "scatterplot")
  .append("g")
  .attr("transform", "translate(" + [margin.left, margin.top] + ")");

svg
  .append("g")
  .attr("transform", "translate(" + [0, 0] + ")")
  .attr("id", "y-axis")
  .call(yAxis);

svg
  .append("g")
  .attr("transform", "translate(" + [0, height] + ")")
  .attr("id", "x-axis")
  .call(xAxis);

const xAxisMargin = 40;5

// Add the tooltip container to the vis container
              // it's invisible and its position/contents are defined during mouseover
var tooltip = d3.select(".scatterPlotChartContainer").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// tooltip mouseover event handler
var tipMouseover = function(d) {
    // var color = colorScale(d.manufacturer);
    var html  = `<div style='background-color: seashell; padding: 8px; font-size: 16px;'>` +
    "<b>" + d.Name + "</b> " +  
                "<br/>" + d.Year + "&nbsp;&nbsp;&nbsp;&nbsp;<span style='color:" + "crimson" + ";'>" + d.Time + "</span>&nbsp;&nbsp;&nbsp;&nbsp;"+d.Nationality+"<br/>" +
                "<em>" + d.Doping +"</em></div>";

    tooltip.html(html)
        .style("left", (d3.event.pageX + 15) + "px")
        .style("top", (d3.event.pageY - 28) + "px")
        .attr("id", "tooltip")
        .attr("data-year", d.Year)
      .transition()
        .duration(200) // ms
        .style("opacity", .9) // started as 0!

};
// tooltip mouseout event handler
var tipMouseout = function(d) {
    tooltip.transition()
        .duration(300) // ms
        .style("opacity", 0); // don't care about position!
};

const scatterplot2 = d3
  .select("svg") // select the `svg` element (pre-existing)
  .selectAll(".dot") // grab all of the `rects` inside
  .data(local_scatterplot_data) // bind the data? append the data?
  .enter() // enter this to the DOM
  .append("circle") // append our data as rects
  .attr("r", d =>  8) // radius
  .attr("cx", d => {
    return xMap(d.Year);
  }) // circumference? x value
  .attr("cy", d => {
    return yMap(d.Time)}) // circumference? y value // positioning data?
  .attr("width", scatterplotWidth) // the width is 20 -1 for each data point
  .attr("class", "dot")
  .attr("data-xvalue", d => d.Year
  )
  .attr("data-yvalue", d => yValue(d.Time).toISOString()
  )
  .attr("data-date", d => d["Time"])
  .attr("data-gdp", d => d["Year"])
  .attr("fill", d => (d["Doping"] !== "" ? colorScale(4) : colorScale(5)))
  .attr("transform", "translate(" + [margin.left, margin.top] + ")") // make room for y-axis
  .on("mouseover", tipMouseover)
  .on("mouseout", tipMouseout);




console.log("colorScale")
console.log(colorScale(4))
console.log(colorScale(5))
console.log(colorScale(6))
console.log(colorScale(7))
  
  
  
  
  
//   xScale.domain(local_scatterplot_data.map(d => d));
// yScale.domain([0, d3.max(local_scatterplot_data, d => d.quantity)]);
// .attr("transform", function(d, i) {
//   return "translate(" + i * scatterplotHeight + ", 0)";
// });
// const legendVals = local_scatterplot_data.map((item) => item.Doping.length > 0 ? "Doping allegations" : "Riders with no doping allegations")
const legendVals = ["Riders with no doping allegation", "Doping allegations"]


// const svgLegend = svg
// .selectAll(".legend")
// .append("g")
// .attr("width", 500)
// .attr("height", 100)
// .attr("class", "legend");




const legend = svg.selectAll(".legend")
.data(legendVals)
.enter()
.append("g")
.attr("class", "legend")
.attr("id", "legend")
.attr("transform", `translate(0,${height / 3})`);


legend.append("rect")
.attr("x",  width -18)
.attr("y",  (d, i) => i * 20)
.attr("class", "legend")
.attr("id", "legend")
.attr("width", 18)
.attr("height", 18)
.style("fill", function(d, i) {
  return d === "Doping allegations" ? colorScale(4) : colorScale(5)
});

legend.append("text")
.attr("x", width - 30)
.attr("y", (d, i) => i * 20)
.text(function(d, i){
  return d
})

.attr("class", "textselected")
.style("text-anchor", "end")
.style("font-size", 15)

// ==========================================

// const svg = d3
//   .select(".scatterPlotChartContainer")
//   .append("svg")
//   .attr("width", width + margin.left + margin.right)
//   .attr("height", height + margin.top + margin.bottom)
//   .attr("id", "scatterplot")
//   .append("g")
//   .attr("transform", "translate(" + [margin.left, margin.top] + ")");