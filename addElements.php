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


$name = $_REQUEST["name"];
$company = $_REQUEST["company"];
$model = $_REQUEST["model"];
$price = $_REQUEST["price"];
$path = $_REQUEST["path"];
$category = $_REQUEST["category"];
$special = $_REQUEST["special"];

ChromePhp::log($name);


$sql="INSERT INTO products (name, Company, Model, Price, Picture, Category, special)
VALUES ('$name', '$company', '$model', '$price', '$path', '$category', '$special')";
$ret = mysqli_query($con, $sql);
ChromePhp::log($ret);


mysqli_close($con);
?>