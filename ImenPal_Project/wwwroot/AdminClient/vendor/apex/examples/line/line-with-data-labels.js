var options = {
	chart: {
		height: 350,
		type: 'line',
		zoom: {
			enabled: false
		},
		dataLabels: {
			enabled: false
		},
		shadow: {
			enabled: true,
			color: '#2e323c',
			top: 18,
			left: 7,
			blur: 10,
			opacity: 1
		},
	},
	colors: ['#1a8e5f', '#262b31', '#434950', '#63686f', '#868a90'],
	stroke: {
		curve: 'smooth',
		width: 3,
	},
	series: [{
			name: "زیاد - 2018",
			data: [28, 29, 33, 36, 32, 32, 33]
		},
		{
			name: "پاین - 2017",
			data: [12, 11, 14, 18, 17, 13, 13]
		}
	],
	title: {
		text: 'درجه حرارت متوسط و پایین',
		align: 'center'
	},
	grid: {
		borderColor: '#e7e7e7',
		row: {
			colors: ['#f5f9fe', '#ffffff'], // takes an array which will be repeated on columns
			opacity: 0.5
		},
	},
	markers: {
		size: 6
	},
	xaxis: {
		categories: ['تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی'],
		title: {
			text: 'ماه'
		}
	},
	yaxis: {
		title: {
			text: 'درجه حرارت'
		},
		min: 5,
		max: 40
	},
	legend: {
		position: 'top',
		horizontalAlign: 'right',
		floating: true,
		offsetY: -25,
		offsetX: -5
	}
}

var chart = new ApexCharts(
	document.querySelector("#line-with-data-labels"),
	options
);

chart.render();






				