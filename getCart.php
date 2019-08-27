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

$user = "SELECT cid FROM currentUser WHERE row = '1'";
$ret = mysqli_query($con,$user);
$current = mysqli_fetch_array($ret);
$cid = $current['cid'];

ChromePhp::log($current);
ChromePhp::log($cid);

  
$sql="SELECT fkpid FROM shopping_cart WHERE fkcid = '$cid'";
$result = mysqli_query($con,$sql);
while($row = mysqli_fetch_array($result))
	{
	$pid = $row['fkpid'];
	$psql="SELECT * FROM products WHERE pid = '$pid'";
	$products = mysqli_query($con,$psql);
	
	ChromePhp::log($products);  
	
	while($r = mysqli_fetch_array($products))
		{
		ChromePhp::log($r);  
		$values[] = $r;
		}
	$basket[] = $values;
	ChromePhp::log($basket);  
	}
echo json_encode($basket);

		


mysqli_close($con);
?>