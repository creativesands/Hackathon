
    <?php
		
	    $con = mysql_connect("localhost","root","sand");

	    if(mysql_select_db("creativesands")){
	    	// echo "DB Selected <br>";
	    }

	    $sql = "SELECT name from hackathon_attendees";

	    $result = mysql_query($sql, $con);

	    $i = 0;

	    while($row = mysql_fetch_array($result)){
	    	$names[$i++] = $row['name'];
	    }

	    echo json_encode($names);

	    mysql_close($con);

    ?>