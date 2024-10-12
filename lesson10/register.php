<?php
   include_once('config.php');

   if(isset($_POST['submit']))
   {
    
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $tempPass= $_POST['password'];
    $password = password_hash($tempPass, PASSWORD_DEFAULT);

    if(empty($name) || empty($surname) || empty($username) || empty($email) || empty($password))
    {
        echo "You need to fill all these fields";
    }else{
        $sql =" SELECT username FROM user WHERE username=:username";

        $tempSQL= $conn->prepare($sql);
        $tempSQL->bindParam(':username', $username);
        $tempSQL->execute();


        if($tempSQL->rowCount()>0){
            echo "Username exists";
            header("refresh:2, url=signup.php");

        }else{
            $sql= "INSERT into user(name, surname, username,email,password) values (:name, :surname, :username,:email,:password) "
            $insertSql=$conn->prepare($sql);

            $sqlQuery->bindParam(':name', $name);
            $sqlQuery->bindParam(':surname', $surname);
            $sqlQuery->bindParam(':username', $username);
            $sqlQuery->bindParam(':email', $email);
            $sqlQuery->bindParam(':password', $password);

            $insertSql->execute();
            echo "Data saved successfully";
            header("refresh:2; url=login.php");
        }

    }
   }


?>