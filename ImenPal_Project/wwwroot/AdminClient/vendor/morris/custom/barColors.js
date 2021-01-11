// Morris Bar Colors
Morris.Bar({
	element: 'barColors',
	data: [
		{x: 'فروردین', Sales: 6},
		{x: 'اردیبهشت', Sales: 1},
		{x: 'خرداد', Sales: 2},
		{x: 'تیر', Sales: 3},
		{x: 'مرداد', Sales: 2},
		{x: 'شهریور', Sales: 4},
		{x: 'مهر', Sales: 7},
		{x: 'آبان', Sales: 2},
		{x: 'آذر', Sales: 5},
		{x: 'دی', Sales: 9},
		{x: 'بهمن', Sales: 3},
		{x: 'اسفند', Sales: 5},
	],
	xkey: 'x',
	ykeys: ['Sales'],
	labels: ['فروش'],
	resize: true,
	gridLineColor: "#e1e5f1",
	hideHover: "auto",
	barColors:['#1a8e5f', '#262b31', '#434950', '#63686f', '#868a90'],
});