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
  
$username = $_REQUEST["username"];
$pw = $_REQUEST["pw"];

ChromePhp::log($username);
ChromePhp::log($pw);
 
$sql="SELECT * FROM users WHERE username='$username'";
$result=mysqli_query($con, $sql);

ChromePhp::log($result);

// Mysql_num_row is counting table row
$count=mysqli_num_rows($result);
ChromePhp::log($count);

// If result matched $username and $password, table row must be 1 row
if($count==1){
    $row = mysqli_fetch_array($result);
	ChromePhp::log($row);
	ChromePhp::log($row['password']);
	
    if ($pw === $row['password']){
        echo $row['cid'];
        return true;
    }
    else {
        echo "Wrong Username or Password";
        return false;
    }
}
else{
    echo "Wrong Username or Password";
    return false;
}



mysqli_close($con);
?>