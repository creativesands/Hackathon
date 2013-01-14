
/**
   Timer object counts down to 0 in days, hours, minutes, seconds and updates corresponding HTML Elements every second.
   Constructor takes the following parameters:
   numberOfSeconds :   Total number of seconds to count down from
   HTML elements for days, hours, mins and seconds
**/


function Timer(numberOfSeconds, daysTag, hoursTag, minsTag, secsTag) {
    this.days = days = parseInt((numberOfSeconds / (3600 * 24)),10);
    this.hours = hours = parseInt((numberOfSeconds / 3600) % 24, 10);
    this.mins = mins = parseInt(((numberOfSeconds / 60) % 60), 10);
    this.secs = secs = parseInt((numberOfSeconds % 60), 10);

    //Update HTML with initial values
    daysTag.text(days);
    hoursTag.text(hours);
    minsTag.text(mins);
    secsTag.text(secs);

    var interval; //reference to stop setInterval()
    var countingDown = true;

    var updater = function () {
        if (days + hours + mins + secs == 0 && countingDown) {
            this.stop();
	        }
	    else {
            if (secs != 0) {
                secsTag.text(--secs);
	        }
	        else {
	            secs = 60;
	            secsTag.text(--secs);
	            if (mins != 0) {
	                minsTag.text(--mins);
	            }
	            else {
	                mins = 60;
	                minsTag.text(--mins);
	                if (hours != 0) {
	                    hoursTag.text(--hours);
	                }
	                else {
	                    hours = 24;
	                    hoursTag.text(--hours);
	                    if (days != 0) {
	                        daysTag.text(--days);
	                    }
	                    else {
	                        days = 0;
	                    }
	                }
	            }
	        }
	    }
    }

    this.start = function () {
        countingDown = true;
        secsTag.addClass("scroll-animation");
        interval = setInterval(updater,1000);
    }

    this.stop = function () {
        countingDown = false;
        secsTag.removeClass("scroll-animation");
        window.clearInterval(interval);
    }
}

var hackathonTimeStamp = 1358760600000; //Mon, 21 Jan 2013 09:30:00 GMT 1358760600000
var nowTimeStamp = new Date().getTime(); //Current Timers

if (hackathonTimeStamp > nowTimeStamp) {
    var timeDiff = hackathonTimeStamp - nowTimeStamp;
}
else {
    var timeDiff = 0;
}

//Ignoring Milliseconds
timeDiff = parseInt(timeDiff/1000, 10);

//Reference to HTML elements corresponding to days, hours, mins and secs
var days_ = $("#days p:last-child"),
	hours_ = $("#hours p:last-child"),
	mins_ = $("#mins p:last-child"),
	secs_ = $("#secs p:last-child");

countDownTimer = new Timer(timeDiff, days_, hours_, mins_, secs_);
//Start counter only if timeDiff is positive
if (timeDiff > 0) {
    countDownTimer.start();
}


/**
    RSVP LOGIC
    If user clicks rsvp buttons, hide the buttons and show rsvp-yes message or show rsvp-no message according to the button clicked
**/

$("#no, #yes").click(function () {
    $(".rsvp-button-wrapper").fadeOut("fast", function () {
        $(".rsvp-message").show(); //show message container first
    });
});

$("#yes").click(function () {
    $("#rsvp-yes").slideDown("fast", function () {
        $("#attendee-name input:first").focus();
    });
});

$("#no").click(function () {
    $("#rsvp-no").slideDown("fast");
});

/**
RSVP Attedees listing
**/

function refreshNames() {
    $.getJSON('attendeeNames.php', function (data) {
        var nameList = "";
        for (var i in data) {
            nameList += "<span class='attendee-names'>" + data[i] + "</span> \n"
        }
        $(".attendees tr:nth-child(2) td").html(nameList);
    });
}

refreshNames();

/**
RSVP Form Handling
**/

//Sending Form Data by AJAX
$('#attendee-name input[type="submit"]').click(function (evt) {
    evt.preventDefault();
    //Form Validation
    if (!$("#attendee-name input:first").val()) {
        $("#attendee-name input:first").css("border-bottom-color","red").focus();
    }
    else if (!$("#attendee-name input[type='email']").val()) {
        $("#attendee-name input[type='email']").css("border-bottom-color", "red").focus();
    }
    //Send data by AJAX
    else {
        $.ajax({
            type: "POST",
            url: "hackathon_register.php",
            data: $('form#attendee-name').serialize(),
            success: function (data) {
                refreshNames();
                $('#attendee-name').fadeOut("slow");
            }
        });
    }
});