<?php
include 'ChromePhp.php';


ChromePhp::log('Hello console');
	

$dbhost = "bigyellowcat.cs.binghamton.edu";
$dbuser = "maxwell";
$dbpass = "maxw8031";
$dbname = "maxwell";


$con = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
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
  
ChromePhp::log($con);  

$cid = $_REQUEST["cid"];

ChromePhp::log($con); 


$sql = "UPDATE currentUser SET cid = '$cid'
WHERE row = '1'";

$result = mysqli_query($con,$sql);




mysqli_close($con);
?>