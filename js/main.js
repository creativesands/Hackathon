function Timer(days, hours, mins, secs) {
	this.days	= parseInt(days,10);
	this.hours	= parseInt(hours,10);
	this.mins	= parseInt(mins,10);
	this.secs	= parseInt(secs,10);
	this.print 	= function() {
		console.log("There are " + this.days + " days and " + this.hours + " hours left for the event.");
	};
};

var CDTimer = new Timer(
	$("#days p:last-child").text(),
	$("#hours p:last-child").text(),
	$("#mins p:last-child").text(),
	$("#secs p:last-child").text()
	);

CDTimer.print();