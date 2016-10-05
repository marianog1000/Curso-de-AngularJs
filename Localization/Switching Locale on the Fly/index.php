<?php

$localeFound = false;

if($_SERVER["REQUEST_METHOD"]==="GET"){
	if (isset($_GET["localeId"])){
		if($_GET["localeId"]=== "it-it"){
			include("locale/it_it.php");
			localeFound = true;				
		}		
	}	
}

if(!$localeFound){
	include("locale/en_us.php");
}
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<script src="../../angularjs/angular.js"></script>
	<script src="../../angularjs/i18n/<?php echo $locData['AngularJSLocaleFileName']; ?>"></script>
	<script src="script.js"></script>
</head>
<body ng="mainModule">
	<div ng-controller="mainController">
		<label for="textEdit" /><?php echo $locData['Index.textEdit']; ?></label>
		<input id="textEdit" type="text" ng-model="viewState.textEditValue" /><br />
		<br />
		
		<label for="selectionCheck" /><?php echo $locData['Index.selectionCheck']; ?></label>
		<input id="selectionCheck" type="checkbox" ng-model="viewState.selectionCheckValue" /><br />
		<br />
		
		<?php echo $locData['Index.todaysDateStr']; ?> {{currentDate | date:"fullDate"}} <br />
		<br />
		<h4><?php echo $locData['Index.selectLanguageStr']; ?></h4>
		<button ng-click="changeLanguage('en-us')"><?php echo $locData['Index.englishBtn']; ?></button>
		<button ng-click="changeLanguage('it-it')"><?php echo $locData['Index.italianBtn']; ?></button>
	</div>
</body>
</html>
