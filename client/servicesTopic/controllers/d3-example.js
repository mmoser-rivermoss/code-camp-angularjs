angular.module('riverMoss.services-topic').controller('D3ExampleController', ['$scope', 'd3Service', function($scope, d3Service) {
    d3Service.d3().then(function(d3) {
        var svg = d3.select("svg");

        var square = svg.append("rect")
            .attr("x", 250)
            .attr("y", 200)
            .attr("width", 200)
            .attr("height", 200)
            .style("fill", "#1d12b9")
            .style("stroke", "#000000")
            .style("stroke-width", 4);

        var circle = svg.append("circle")
            .attr("cx", 350)
            .attr("cy", 300)
            .attr("r", 85)
            .style("fill", "#ff471e")
            .style("stroke", "#000000")
            .style("stroke-width", 5);
    });
}]);