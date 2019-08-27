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
$name = $_REQUEST["name"];
$company = $_REQUEST["company"];
$model = $_REQUEST["model"];
$price = $_REQUEST["price"];
$path = $_REQUEST["path"];
$category = $_REQUEST["category"];
$special = $_REQUEST["special"];

ChromePhp::log($pid); 


$sql = "UPDATE products
        SET name = '$name', Company = '$company', Model = '$model', Price = '$price', Picture = '$path', Category = '$category', special =  '$special'
        WHERE pid= '$pid'";
		
		
$result = mysqli_query($con,$sql);
$row = mysqli_fetch_array($result);


mysqli_close($con);
?>