<?php
$file = fopen('example.txt', 'r');

while(!feof($file)){
    echo fget($file) . "<br>";

}

fclose($file);
?>