// Calendar Selectable
document.addEventListener('DOMContentLoaded', function() {
	var calendarEl = document.getElementById('calendarSelectable');

	var calendar = new FullCalendar.Calendar(calendarEl, {
		plugins: [ 'interaction', 'dayGrid', 'timeGrid' ],
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,timeGridDay'
		},
		navLinks: true, // can click day/week names to navigate views
		selectable: true,
		selectMirror: true,
		select: function(arg) {
			var title = prompt('Event Title:');
			if (title) {
				calendar.addEvent({
					title: title,
					start: arg.start,
					end: arg.end,
					allDay: arg.allDay
				})
			}
			calendar.unselect()
		},
		editable: true,
		eventLimit: true, // allow "more" link when too many events
		events: [
			{
				title: 'رویداد یک روز کامل',
				start: '2019-08-01'
			},
			{
				title: 'رویداد طولانی',
				start: '2019-08-07',
				end: '2019-08-10'
			},
			{
				groupId: 999,
				title: 'تکرار رویداد',
				start: '2019-08-09T16:00:00'
			},
			{
				groupId: 999,
				title: 'تکرار رویداد',
				start: '2019-08-16T16:00:00'
			},
			{
				title: 'کنفرانس',
				start: '2019-08-11',
				end: '2019-08-13'
			},
			{
				title: 'ملاقات',
				start: '2019-08-12T10:30:00',
				end: '2019-08-12T12:30:00'
			},
			{
				title: 'ناهار',
				start: '2019-08-12T12:00:00'
			},
			{
				title: 'ملاقات',
				start: '2019-08-12T14:30:00'
			},
			{
				title: 'ساعت استراحت',
				start: '2019-08-12T17:30:00'
			},
			{
				title: 'شام',
				start: '2019-08-12T20:00:00'
			},
			{
				title: 'جشن تولد',
				start: '2019-08-13T07:00:00'
			},
			{
				title: 'برای داشبورد کلیک کنید',
				url: 'index.html',
				start: '2019-08-28'
			}
		]
	});

	calendar.render();
});