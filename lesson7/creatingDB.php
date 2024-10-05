<?php
  $host ='localhost';
  $user='root';
  $pass='';

  try{
    $conn=new PDO("mysql:host=$host;", $user, $pass);

    $sql="CREATE DATABASE db2";

    $conn-> exec($sql);

    echo "Database created";
  }catch(Exception $e){
    echo "Database not created,something went wrong";
  }

?>