<?php
include 'ChromePhp.php';


$dbhost = "bigyellowcat.cs.binghamton.edu";
$dbuser = "maxwell";
$dbpass = "maxw8031";
$dbname = "maxwell";


ChromePhp::log('Hello console');
ChromePhp::log($_SERVER);

$con = mysqli_connect($dbhost,$dbuser,$dbpass, $dbname);
if (!$con)
  {
	ChromePhp::log('Could not connect');
  die('Could not connect: ' . mysqli_error($con));
  }
 
if (mysqli_connect_errno())
  {
  ChromePhp::log('Could not connect');
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  } 

ChromePhp::log('Getting parameters');


$email = $_REQUEST["email"];
$username = $_REQUEST["username"];
$pw = $_REQUEST["pw"];

ChromePhp::log($email);
ChromePhp::log($username);
ChromePhp::log($pw);

$check = "SELECT * FROM users WHERE username = '$username'";
$rs = mysqli_query($con, $check);
ChromePhp::log($rs);
$data = mysqli_fetch_array($rs, MYSQLI_NUM);
ChromePhp::log($data);
ChromePhp::log($data[0]);

if($data[0] > 1) {
    echo "Username Already in Exists<br/>";
}

else{
	$sql="INSERT INTO users (username, password, email)
	VALUES ('$username', '$pw', '$email')";
	$ret = mysqli_query($con, $sql);
	ChromePhp::log($ret);
	if($ret){
		echo "You are now registered<br/>";
    }
	else
	{
		echo "Error adding user in database<br/>";
    }
	
}


mysqli_close($con);
?>