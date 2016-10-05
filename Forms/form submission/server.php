<?php

if ($_SERVER["REQUEST_METHOD"]=== "POST")
{
	if(isset($_POST["firstName"]) && isset($_POST["lastName"])){
		$result = "RECEIVED PERSON DATA:" .
			"<br/>firstName = " . $_POST["firstName"] . 
			"<br/>lastName = " . $_POST["lastName"];		
	}else if(isset($_GET["person"])){
		$person = json_encode($_GET["person"]);
		
		$result = json_decode(array(
				"receivedFirstName" => $person->firstName,
				"receivedLastName" => $person->lastName,
			));			
	}else
		$result = "INVALID REQUEST DATA";	
}
?>
	

	
