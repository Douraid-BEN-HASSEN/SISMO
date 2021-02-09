<!DOCTYPE html>
<html>
<head>
	<title></title>

	<script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/modules/series-label.js"></script>
	<script src="https://code.highcharts.com/modules/exporting.js"></script>
	<script src="https://code.highcharts.com/modules/export-data.js"></script>

	<script src="class/CMain.js"></script>
	<script src="class/CChart.js"></script>
	<script src="class/CSeries.js"></script>
	<script src="class/CSerie_name.js"></script>
	<script src="class/CWebservice.js"></script>
	
</head>
<body>

</body>
</html>
 

<div id="container">	

</div>

<script type="text/javascript">
	
 
	var main = new CMain('2019-05-23', 1000, 600);
	main.setup();

	main.initPoints();
	setInterval(function(){
		main.triggerPos();
		main.updatePoints();
	}, 1000);


</script>

<?php if (isset($_GET['jour'])){ echo $_GET['jour']; } else{ echo date("Y-m-d"); } ?>