
<?php
	
    $con = mysql_connect("localhost","root","sand");
    // $con = mysql_connect("localhost","divlorg_cs","efyufs`1tboz");

    if(mysql_select_db("divlorg_cs")){
    	// echo "DB Selected <br>";
    }

    $name = addslashes($_POST['name']);

    $email = addslashes($_POST['email']);
    
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
    
    $query = addslashes($_POST['query']);

    $sql = "INSERT into hackathon_attendees
    		(name, laptop, dongle, query, email) 
    		VALUES ('$name','$laptop' ,'$dongle', '$query', '$email')";

    if(mysql_query($sql, $con)){
    	// echo "Query Success! \n";
    }
    // else echo "Query Failed! \n";

    // printf("%s\n%s\n%s\n%s\n%s",$name, $laptop, $dongle, $_POST['query'], $email);

?>