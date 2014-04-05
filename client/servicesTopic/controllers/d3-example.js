angular.module('riverMoss.services-topic').controller('D3ExampleController', ['$scope', 'd3Service', function($scope, d3Service) {
    d3Service.d3().then(function(d3) {
        var svg = d3.select("svg");

        var square = svg.append("rect")
            .attr("x", 125)
            .attr("y", 50)
            .attr("width", 100)
            .attr("height", 100)
            .style("fill", "#12b91a")
            .style("stroke", "#000000")
            .style("stroke-width", 1);

        var circle = svg.append("circle")
            .attr("cx", 175)
            .attr("cy", 98)
            .attr("r", 31)
            .style("fill", "#221eff")
            .style("stroke", "#000000")
            .style("stroke-width", 1);
    });
}]);