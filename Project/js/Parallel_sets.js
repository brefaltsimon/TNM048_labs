function Parallel_sets(data){
    var chart = d3.parsets()
      .dimensions(["Gender","Education_Level","Marital_Status","Income_Category","Card_Category"]);

    var vis = d3.select("#vis").append("svg")
      .attr("width", chart.width())
      .attr("height", chart.height());
  
    d3.csv(data, function(error, csv) {
        vis.datum(csv).call(chart);
    
    });
}
    
