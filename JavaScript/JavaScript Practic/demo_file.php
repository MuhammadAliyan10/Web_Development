<?php
// $MyObj = new stdClass();
// $MyObj -> name = 'Aliyan';
// $MyObj -> class = 'BSCS-A';
// $MyObj -> section = 'A';
// $MyObj -> rollNumber = 'BCS07223017';

// $myJSON = json_encode($MyObj);
// echo $myJSON; 
 ?>

<?php
$myObj->name = "John";
$myObj->age = 30;
$myObj->city = "New York";

$myJSON = json_encode($myObj);

echo $myJSON;
?>