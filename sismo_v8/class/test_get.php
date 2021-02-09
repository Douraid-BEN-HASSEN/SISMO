<?php

	$conn = new mysqli('localhost', 'root', '', 'sismo');
	$requette = "SELECT points, seconde, ms FROM `heure_0` WHERE `date` = '2019-04-11' AND `seconde` < 6";
	$decalage = 0;
	$cpt = 0;
	$points_tab = array();
	$result = $conn->query($requette);
					while ($row = $result->fetch_row()) {
			        			$points_tab[$cpt][0] = $decalage + $row[0];
			        			$points_tab[$cpt][1] = floatval($row[1].'.'.$row[2]);
				        		$cpt+=1;	        	
			    	}

			    	echo '<br>'.json_encode($points_tab);
?>