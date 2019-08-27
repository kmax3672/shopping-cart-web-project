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

$pid = $_REQUEST["pid"];

ChromePhp::log($pid); 


$sql = "SELECT cid FROM currentUser WHERE row = '1'";
$result = mysqli_query($con,$sql);
$row = mysqli_fetch_array($result);
$cid = $row['cid'];

ChromePhp::log($result); 
ChromePhp::log($row); 
ChromePhp::log($cid); 

$cart = "INSERT INTO shopping_cart (fkcid, fkpid)
VALUES ('$cid', '$pid')";
$ret = mysqli_query($con, $cart);



mysqli_close($con);
?>