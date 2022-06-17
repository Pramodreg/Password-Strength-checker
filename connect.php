<?php
$Uname = $_POST['UserName'];
$Pname = $_POST['UserName'];
$Cpname = $_POST['UserName'];

$conn = new mysqli('localhost','root','','passwordstrength');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(UserName, Passwordd, C-password) values(?, ?, ?)");
		$stmt->bind_param("sssssi", $Userame, $Passwordd, $cpassword);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>