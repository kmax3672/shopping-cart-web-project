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
  
$sql="SELECT * FROM products";
$result = mysqli_query($con,$sql);


ChromePhp::log('In front of while loop');
while($row = mysqli_fetch_array($result))
	{
  	ChromePhp::log('Inside while loop');
	ChromePhp::log($row);
	ChromePhp::log($row['Company']);
	ChromePhp::log($row['Model']);
	ChromePhp::log($row['Price']);
	ChromePhp::log($row['Picture']);
	$values[] = $row;
	}
echo json_encode($values);


mysqli_close($con);
?>