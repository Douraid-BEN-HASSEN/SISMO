<?php
class CWebserviceGet
{
	public $status;
	private $conn;

	function db_connect($db_host, $db_name, $db_login, $db_password)
	{
		// Connexion à la base de donnée
		$this->conn = new mysqli($db_host, $db_login, $db_password, $db_name);

		// On verifie la connexion
		if ($this->conn->connect_error){
			$this->status = -1;
		    die("Echec de connexion: " . $this->conn->connect_error);
		} 
		else 
		{	
			$this->status = 0;
		}
	}

	function read($option, $date, $heure, $seconde, $decalage)
	{
		if($option == 'all') $requette = "SELECT points, seconde, ms FROM `heure_$heure` WHERE `date` = '$date' ORDER BY seconde ASC, ms ASC";
		if($option == 'bigger') $requette = "SELECT points, seconde, ms FROM `heure_$heure` WHERE `date` = '$date' AND `seconde` > $seconde ORDER BY seconde ASC, ms ASC";
		if($option == 'smaller') $requette = "SELECT points, seconde, ms FROM `heure_$heure` WHERE `date` = '$date' AND `seconde` < $seconde ORDER BY seconde ASC, ms ASC";

		$cpt = 0;
		$points_tab = array();
		if ($result = $this->conn->query($requette)) {
			
					while ($row = $result->fetch_row()) {
			        			$points_tab[$cpt][0] = floatval($row[1].'.'.$row[2]);
			        			$points_tab[$cpt][1] = $decalage + $row[0];
				        		$cpt+=1;	        	
			    	}

			    	echo json_encode($points_tab);

		    /* Libère le jeu de résultats */
		    $result->close();
		}

		/* Fermeture de la connexion */
		$this->conn->close();

	}


}

?>

<?php

include 'db_connect.php';

$date = $_GET['date'];
$heure = $_GET['heure'];
$decalage = $_GET['decalage'];
$seconde = $_GET['seconde'];
$option = $_GET['option'];

$ttt = new CWebserviceGet();
$ttt->db_connect($host, $database, $user, $password);
$ttt->read($option, $date, $heure, $seconde, $decalage);


?>

