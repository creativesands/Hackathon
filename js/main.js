var	days_	= $("#days p:last-child"),
	hours_	= $("#hours p:last-child"),
	mins_	= $("#mins p:last-child"),
	secs_	= $("#secs p:last-child");

function Timer(days, hours, mins, secs) {
	this.days	= parseInt(days,10);
	this.hours	= parseInt(hours,10);
	this.mins	= parseInt(mins,10);
	this.secs	= parseInt(secs,10);
	this.print 	= function() {
		console.log("There are " + this.days + " days and " + this.hours + " hours left for the event.");
	};
};

var CDTimer = new Timer(days_.text(),hours_.text(),mins_.text(),secs_.text());

CDTimer.print();