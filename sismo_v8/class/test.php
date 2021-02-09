<!DOCTYPE html>
<html>
<head>
	<title></title>

	<script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/modules/series-label.js"></script>
	<script src="https://code.highcharts.com/modules/exporting.js"></script>
	<script src="https://code.highcharts.com/modules/export-data.js"></script>
	<script src="CChart.js"></script>
	<script src="CSeries.js"></script>
	<script src="CWebservice.js"></script>
	<script src="CSerie_name.js"></script>
	<script src="CMain.js"></script>

</head>
<body>

</body>
</html>
 	<?php 
		if (isset($_GET['jour'])){
		 echo $_GET['jour']; 
		} 
		else{ 
			$now = DateTime::createFromFormat('U.u', microtime(true));
			echo $now->format('Y-m-d H:i:s.u');
		} 
	?>

<div id="container"></div>

<script type="text/javascript">
	var webservice = new CWebservice();
	var point = webservice.get("http://localhost/sismo/webservice/getPoints.php?date=2019-03-31&heure=0&decalage=0&seconde=50&option=smaller");

	var main = new CMain('<?php if (isset($_GET['jour'])){ echo $_GET['jour']; } else{ echo date("Y-m-d"); } ?>');
	main.setup();
	main.initPoints();
	setInterval(function(){
		main.triggerPos();
	}, 1);

</script>