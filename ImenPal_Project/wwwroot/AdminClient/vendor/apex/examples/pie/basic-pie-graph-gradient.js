var options = {
	chart: {
		width: 400,
		type: 'pie',
	},
	labels: ['تیم 1', 'تیم 2', 'تیم 3', 'تیم 4', 'تیم 5'],
	series: [20, 20, 20, 20, 20],
	responsive: [{
		breakpoint: 480,
		options: {
			chart: {
				width: 200
			},
			legend: {
				position: 'bottom'
			}
		}
	}],
	stroke: {
		width: 0,
	},
	fill: {
		type: 'gradient',
	},
	colors: ['#1a8e5f', '#262b31', '#434950', '#63686f', '#868a90'],
}
var chart = new ApexCharts(
	document.querySelector("#basic-pie-graph-gradient"),
	options
);
chart.render();