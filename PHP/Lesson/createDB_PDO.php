<?php

//declaring parameters

$host ='localhost';
$user = 'root';
$pass ='';

try{
    $conn = new PDO ("mysql:host=$host", $user, $pass);
    $sql = "Create database db";
    $conn-> exec($sql);
    echo "Database is created";
    echo "Connected";

}catch(Exception $e){
    echo "Database not created, something went wrong";
}





?>