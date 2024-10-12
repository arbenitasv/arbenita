<?php

	include_once('config.php');	


	try {
        if (isset($_POST['submit'])) {

            $username = $_POST['username'];
            $name = $_POST['name'];
            $surname = $_POST['surname'];
            $email = $_POST['email'];
    
            $sql = "INSERT INTO user (username,name, surname, email) VALUES (:username,:name, :surname, :email)";
            $sqlQuery = $conn->prepare($sql);
    
            $sqlQuery->bindParam(':name', $name);
            $sqlQuery->bindParam(':username', $username);
            $sqlQuery->bindParam(':surname', $surname);
            $sqlQuery->bindParam(':email', $email);
    
            $sqlQuery->execute();
            echo "Data saved successfully ...";
        }
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
    
?>