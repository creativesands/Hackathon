
<?php
	
    $con = mysql_connect("localhost","root","sand");

    if(mysql_select_db("creativesands")){
    	// echo "DB Selected <br>";
    }

    $name = $_POST['name'];
    
    if($_POST['laptop'] == "on") {
    	$laptop = 1;
    }
    else {
    	$laptop = 0;
    }

    if($_POST['dongle'] == "on") {
    	$dongle = 1;
    }
    else {
    	$dongle = 0;
    }
    
    $query = $_POST['query'];

    $sql = "INSERT into hackathon_attendees
    		(name, laptop, dongle, query) 
    		VALUES ('$name','$laptop' ,'$dongle', '$query')";

    if(mysql_query($sql, $con)){
    	// echo "Query Success! \n";
    }
    // else echo "Query Failed! \n";

    // printf("%s\n%s\n%s\n%s",$name, $laptop, $dongle, $_POST['query']);
    
?>