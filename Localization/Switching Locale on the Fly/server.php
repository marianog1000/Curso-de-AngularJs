<?php

session_start();

if($_SERVER["REQUEST_METHOD"]=== "GET")
{
	$result = "";
	if(isset($_GET["method"])){
		if($_GET["method"]=== "restoreState" && 
			isset($_SESSION["clientViewState"]))
		{
			$result = $_SESSION["clientViewState"];
			unset($_SESSION["clientViewState"]);			
		}	
	}
	echo $result;
}
else if($_SERVER["REQUEST_METHOD"]=== "POST"){
	if(isset($_GET["method"])){
	
		if($_GET["method"] === "saveState"){
		
			if(isset($HTTP_RAW_POST_DATA)){
				$_SESSION["clientViewState"] = $HTTP_RAW_POST_DATA;
			}
		}	
	}
	echo "";

}
?>