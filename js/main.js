var	days_	= $("#days p:last-child"),
	hours_	= $("#hours p:last-child"),
	mins_	= $("#mins p:last-child"),
	secs_	= $("#secs p:last-child");

function Timer(days, hours, mins, secs) {
	this.days = parseInt(days.text(),10);
	this.hours = parseInt(hours.text(), 10);
	this.mins = parseInt(mins.text(), 10);
	this.secs = parseInt(secs.text(), 10);

	this.consolePrint = function () {
	    console.log("There are " + this.days + " days and " + this.hours + " hours left for the event.");
	};

	this.start = function () {
	    var secs = this.secs;
	    var mins = this.mins;
	    var hours = this.hours;
	    var days = this.days;


	    var counter = setInterval(function () {
	        if (days + hours + mins + secs == 0) {
	            window.clearInterval(counter);
	        }
	        else {
                if (secs != 0) {
	                secs_.text(--secs);
	            }
	            else {
	                secs = 60;
	                secs_.text(--secs);
	                if (mins != 0) {
	                    mins_.text(--mins);
	                }
	                else {
	                    mins = 60;
	                    mins_.text(--mins);
	                    if (hours != 0) {
	                        hours_.text(--hours);
	                    }
	                    else {
	                        hours = 24;
	                        hours_.text(--hours);
	                        if (days != 0) {
	                            days_.text(--days);
	                        }
	                        else {
	                            days = 0;
	                        }
	                    }
	                }
	            }
	        }
	    }, 1000);
	}
};

var CDTimer = new Timer(days_,hours_,mins_,secs_);
CDTimer.start();