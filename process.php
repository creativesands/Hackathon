
    <?php
	    /*Calculate difference in time between server time and event time(09:30 IST 21 Jan 2013)*/
		
		date_default_timezone_set("Asia/Kolkata");

		$days = date("d");
		$hours = date("H");
		$mins = date("i");
		$secs = date("s");

		echo "Days: " . $days . " Hours: " . $hours . " Minutes: " . $mins . " Seconds: " . $secs . "<br />";

		$hackathonTimeStamp = 1358782200;
		$nowTimeStamp = mktime(date("H"),date("i"),date("s"),date("m"),date("d"),date("Y"));

		print_r(mktime(date("H"),date("i"),date("s"),date("m"),date("d"),date("Y")));

		echo $nowTimeStamp - $hackathonTimeStamp;
    ?>