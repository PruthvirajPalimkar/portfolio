<?php

$sever = "localhost";
$username = "root";
$password = "";
$dbname = "webcoding";

$con = mysqli_connect($sever, $username, $password, $dbname);

if(!$con)
{
    echo "not connected"
}

// start 

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$sql = "INSERT INTO `myportfolio`(`name`, `email`, `phone`, `message`) VALUES ('$name','$email','$phone','$message')"
?>

$result = mysqli_query($con, $sql);

if($result){
    echo "data submitted";
}
else 
{
    echo "query faild....!";
}